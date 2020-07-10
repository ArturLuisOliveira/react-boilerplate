'use strict';

const { Before, After, setDefaultTimeout } = require('cucumber');
const puppeteer = require('puppeteer');

const { TIME_OUT, HEADLESS, RESOLUTION, SHOW_MOUSE } = require('../../config');
const { mouseHelper } = require('../helpers/injectors');

Before(async function () {
    //set timeout
    setDefaultTimeout(TIME_OUT);

    //instantiate browser
    this.browser = await puppeteer.launch({
        headless: HEADLESS,
        handleSIGINT: false,
        args: ['--disable-gpu', `--window-size=${RESOLUTION.X},${RESOLUTION.Y}`, '--no-sandbox']
    });

    //instantiate page
    this.page = await this.browser.newPage();

    //mouse viewer
    if (SHOW_MOUSE) mouseHelper(this.page);

    //stored values
    this.stored = {};

    //ignore images
    await this.page.setRequestInterception(true);
    this.page.on('request', (req) => {
        if (req.resourceType() === 'image') {
            req.abort();
        } else {
            req.continue();
        }
    });
});

After(async function () {
    //clear browser
    await this.page.close();
    await this.browser.close();

    //clear variables
    this.browser = undefined;
    this.page = undefined;
    this.values = undefined;
});
