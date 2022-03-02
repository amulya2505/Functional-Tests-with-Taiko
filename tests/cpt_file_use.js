const taiko = require('taiko');
const assert = require('assert');

const { button, write, click, link, clear, text, into, scrollTo, $ } = require('taiko');

const getSelectors = require('./constant')



step('Navigate to <field> field', async function(field) => {
 await taiko.waitFor(1000);
 assert.ok(await text(field).exists());
 await click(text(field));
});

step('Add <text_value> as some text', async function (txtvalue) {
  if (await selectors.userDetailsText.exists()) {
    const username = selectors.userNameField;
    await taiko.waitFor(700);
    await clear(selectors.userNameField);
    await write(txtvalue, into(username));
    await taiko.waitFor(500);
  }
});

step('then click on Lets Go Button', async function () {
  await click(selectors.letsgo);
  await taiko.waitFor(500);
});
