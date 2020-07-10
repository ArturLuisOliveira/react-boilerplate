'use strict';
//Scrappers search data from the page.

/**
 * Get local storage item value
 * @param { Object } page - Puppeteer page object.
 * @param { String } item - Local Storage item name.
 * @returns { String } - Local Storage value.
 */
async function getLocalStorageItem(page, item) {
    return await page.evaluate(async function (name) {
        return localStorage.getItem(name);
    }, item);
}

module.exports = { getLocalStorageItem };
