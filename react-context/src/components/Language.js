import React, { useState } from 'react';
import LanguageContext from '../contexts';

const persian = {
  language: 'Persian',
  words: {
    home: 'خانه',
    events: 'رویداد ها',
    aboutUs: 'درباره ما',
    contactUs: 'تماس با ما',
    language: 'زبان',
  },
};

const english = {
  language: 'English',
  words: {
    home: 'Home',
    events: 'Events',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    language: 'Language',
  },
};

export const LanguageProvider = (props) => {
  const [value, setValue] = useState({
    ...persian,
    changeToPersian,
    changeToEnglish,
  });

  function changeToPersian() {
    setValue((pre) => ({ ...persian, changeToPersian, changeToEnglish }));
  }

  function changeToEnglish() {
    setValue((pre) => ({ ...english, changeToPersian, changeToEnglish }));
  }

  return (
    <LanguageContext.Provider value={value}>
      <LanguageContext.Consumer>{(value) => <div>salam {value.language}</div>}</LanguageContext.Consumer>
      {props.children}
    </LanguageContext.Provider>
  );
};
