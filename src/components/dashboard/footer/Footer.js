// Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ language, switchLanguage }) => {
  return (
    <footer className="footer">
      <button onClick={switchLanguage} className="languageButton">
        {language === 'English' ? 'РУС' : 'ENG'}
      </button>
      <p>© 2023 VierTrust</p>
    </footer>
  );
};

export default Footer;
