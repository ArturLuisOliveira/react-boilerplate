'use strict';
//Listeners await for some page event.

/**
 * Wait for a response that fits the specified conditions.
 * @param { Object } page Puppeteer page object.
 * @param { Function } condition Condition for finding request.
 */

const waitForResponse = (page, condition) => {
    return new Promise((resolve) => {
        page.on('response', function callback(response) {
            if (condition(response)) {
                resolve(response);
                page.removeListener('response', callback);
            }
        });
    });
};

module.exports = { waitForResponse };
