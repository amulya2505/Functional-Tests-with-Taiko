const selectors = taiko => {
    return {
      dropdown: taiko.dropDown({ id: 'dropdown_id' }),
      textfield: taiko.textBox({ id: 'textbox_id' }),
      sampletext: taiko.text('Suno India'),
      closebutton: taiko.button('close', taiko.below(taiko.dropDown({ id: 'button1' }))),
      samplelink: taiko.link('some link'),
      radiobutton: taiko.radioButton({ id: 'others' }),
      image: taiko.image({ alt: 'image_alt_text' }),
      letsgo: taiko.$(`//div[@data-testid="sampletestid"]`)
       userNameField : taiko.textBox({ id: 'username' }),
    
    };
  };

  const getSelectors = async taiko => {
    return selectors(taiko);
  };

  module.exports = getSelectors;
