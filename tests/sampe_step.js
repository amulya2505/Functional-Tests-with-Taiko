const taiko = require('taiko');
const assert = require('assert');

const {openBrowser,button,scrollUp,overridePermissions,goto,clear,setConfig,write,screenshot,click,link,text,into} = require('taiko');

const path = require('path');

const headless = process.env.headless_chrome.toLowerCase() === 'true';
const testUrl = process.env.test_url;

const getSelectors = require('./constant')
beforeSpec(async () => {
 selectors = await getSelectors(taiko)
});

beforeSuite(async () => {
 //setConfig( { waitForNavigation: false, navigationTimeout: 120000});
 //await openBrowser({args:['--window-size=1440,900']})
 await openBrowser({
 headless: headless,
 args: ['--use-fake-ui-for-media-stream','--use-fake-device-for-media-stream' ,'--start-fullscreen'],
 });
 setConfig({
 waitForNavigation: false,
 navigationTimeout: 120000,
 observe: true,
 observeTime: 1500,
 retryTimeout: 5000,
 });
 await overridePermissions(testUrl, ['audioCapture']);
});


gauge.screenshotFn = async function () {
 const screenshotFilePath = path.join(
 process.env['gauge_screenshots_dir'],
 `screenshot-${process.hrtime.bigint()}.png`
 );
 await screenshot({ path: screenshotFilePath });
 return await taiko.screenshot({ encoding: 'base64', path: screenshotFilePath });
};

step('Open Website', async () => {
 await goto(testUrl, { waitForEvents: ['loadEventFired'] });
 await taiko.waitFor(500);
});


step('popup should appear and close button should close the pop up', async function () {
 if (await selectors.popup.exists()) {
 assert.ok('pop up is here');
 await click(selectors.closebutton);
 }
 await taiko.waitFor(500);
});


step('user enter <arg0> in dummy text field',async function (arg0) {
 await taiko.waitFor(1000);
 const dummy_textfield = selectors.textfield;
 assert.ok(await dummy_textfield.exists());
 await write(arg0, into(dummy_textfield));  
 await clear(dummy_textfield);

 }
);


step('user selects value from dummy dropdown',async function () {
 await taiko.waitFor(1000);
 const dummy_dropdown = selectors.dropdown;

 assert.ok(await dummy_dropdown.exists());
 dummy_dropdown.select(3);
 }
);

