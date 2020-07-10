'use strict';
//Action perfoms user actions on the page.

/**
 * Click multiple times in a given node.
 * @param { Object } page - Puppeteer page object.
 * @param { String } selector - Node selector.
 * @param { Number } number - Number of times the node will be clicked.
 */
async function clickMultipleTimes(page, selector, number) {
    const clicks = new Array(number).fill(null).map(async () => {
        await page.waitForSelector(selector);
        await page.evaluate((selector) => document.querySelector(selector).click(), selector);
        await page.waitFor(1000);
    });
    Promise.all(clicks);
}

/**
 * Click on the given selector.
 * @param { Object } page - Puppeteer page object.
 * @param { String } selector - Selector to be clicked.
 */
async function clickOnSelector(page, selector) {
    await page.waitForSelector(selector);
    await page.evaluate((selector) => document.querySelector(selector).click(), selector);
}

/**
 * Press on the keyboard the given keys.
 * @param { Object } page - Puppeteer page object.
 * @param { ...String } keys - Keys to be pressed.
 */
async function pressKeys(page) {
    for (const key of Array.from(arguments).slice(1)) {
        await page.keyboard.press(key, { delay: 100 });
    }
}

/**
 * Hover over element and click on element. Don't work on absolute positioned elements.
 * @param { Object } page - Puppeteer page object.
 * @param { String } selector - Selector to be hovered and clicked.
 */
async function hoverAndClickOnSelector(page, selector) {
    await page.waitForSelector(selector);
    const offset = await page.evaluate((selector) => {
        function getOffset(el) {
            const rect = el.getBoundingClientRect();
            return {
                x: rect.left + window.scrollX + 10,
                y: rect.top + window.scrollY + 10
            };
        }
        return getOffset(document.querySelector(selector));
    }, selector);
    await page.mouse.move(0, 0);
    await page.mouse.move(offset.x, offset.y);
    await page.mouse.down();
}

/**
 * Focus on the given selector.
 * @param { Object } page - Puppeteer page object.
 * @param { String } selector - Selector to be focused.
 */
async function focusOnSelector(page, selector) {
    await page.waitForSelector(selector);
    await page.evaluate((selector) => document.querySelector(selector).focus(), selector);
}

/**
 * Scroll into given selector.
 * @param { Object } page - Puppeteer page object.
 * @param { String } selector - Selector to be clicked.
 */
async function scrollIntoSelector(page, selector) {
    await page.waitForSelector(selector);
    await page.$eval(selector, (el) => el.scrollIntoView());
}

module.exports = {
    clickMultipleTimes,
    clickOnSelector,
    pressKeys,
    hoverAndClickOnSelector,
    focusOnSelector,
    scrollIntoSelector
};
