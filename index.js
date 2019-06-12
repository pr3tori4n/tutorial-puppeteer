const puppeteer = require('puppeteer');
async function run() {
    debugger;
    const browser = await puppeteer.launch({
        args: ['--remote-debugging-port=9222'],
        devtools: true,
        headless: false
    });
    const [ page ] = await browser.pages();
    await page.waitFor(5000); //Give us time to load the debugger;
    await page.goto('https://example.com');
    await page.evaluate(() => {
        debugger;
        page.$();
    });
}
run();