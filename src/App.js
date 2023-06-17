import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Explosion from './components/effects/explosion/Explosion'; // import the Explosion component
import Header from './components/dashboard/header/Header';

const translations = {
  English: {
    welcome: "Welcome to BoomToken ICO",
    instructions: "Instructions",
    install: "Install MetaMask.",
    connect: "Connect your wallet.",
    enterAmount: "Enter the amount of BNB you want to spend.",
    buyNow: "Buy Now",
    buyNowInstruction: "Press the 'Buy Now' button to purchase tokens",
    amount: "AmountBNB",
    price: "Token Price",
    nTokens: "Token Quantity for Purchase",
    presale: "Presale",
    addToMetamask: "Add to MetaMask"
  },
  Russian: {
    welcome: "Добро пожаловать в ICO BoomToken",
    instructions: "Инструкции",
    install: "Установите MetaMask.",
    connect: "Подключите ваш кошелек.",
    enterAmount: "Введите сумму BNB, которую вы хотите потратить.",
    buyNow: "Купить Сейчас",
    buyNowInstruction: "Нажмите кнопку 'Купить сейчас' чтобы приобрести токены",
    amount: "Количество BNB",
    price: "Цена токена",
    nTokens: "Количество токенов для покупки",
    presale: "Предварительная продажа",
    addToMetamask: "Добавить в MetaMask"
  }
};

function App() {
  const [account, setAccount] = useState('');
  const [language, setLanguage] = useState('English');

  const t = translations[language];

  const switchLanguage = () => {
    if (language === 'English') {
      setLanguage('Russian');
    } else {
      setLanguage('English');
    }
  };

  return (
    <div className="App">
      <Explosion className="explosion"/>
      <Header language={language} switchLanguage={switchLanguage} account={account} setAccount={setAccount} />
      <div className="main">
        <h1 className="dark-text">{t.welcome}</h1>
        <div className="info-container">
          <div className="presale-container rounded-rect">
            <div className="presale-boomtoken">
              <div className="token-details">
                <h3 className="green-text">{t.presale}</h3>
                <h2>BoomToken <img src={logo} alt="Token Icon Small" className="token-icon-small" /></h2>
              </div>
              <button className="metamask-button">{t.addToMetamask}</button>
            </div>
            <ol className="buy-instructions">
              <p><strong>{t.instructions}</strong></p>
              <li>{t.install}</li>
              <li>{t.connect}</li>
              <li>{t.enterAmount}</li>
              <li>{t.buyNowInstruction}</li>
            </ol>
          </div>
          <div className="purchase-container rounded-rect">
            <div className="input-group">
              <label htmlFor="amount" className="input-label">{t.amount}</label>
              <input id="amount" type="text" placeholder="0.00" className="amount-input" />
            </div>
            <div className="input-group">
              <label htmlFor="price" className="input-label">{t.price}</label>
              <input id="price" type="text" value="$1" readOnly className="token-price" />
            </div>
            <div className="input-group">
              <label htmlFor="nTokens" className="input-label">{t.nTokens}</label>
              <input id="nTokens" type="text" value="10" readOnly className="token-price" />
            </div>
            <button className="buy-button">{t.buyNow}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
