import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import logo from './logo.svg';
import Explosion from './explosion/Explosion'; // import the Explosion component

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
    connected: "Connected: ",
    connectMetamask: "Connect to MetaMask",
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
    connected: "Подключено: ",
    connectMetamask: "Подключиться к MetaMask",
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

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length !== 0) {
        setAccount(accounts[0]);
      }
    };

    if (window.ethereum) {
      checkIfWalletIsConnected();
    } else {
      alert(t.install); // change here
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to connect to MetaMask');
      }
    } else {
      alert(t.install);
    }
  };

  return (
    <div className="App">
      <Explosion className="explosion"/>
      <div className="header" style={{position: "relative", zIndex: "2"}}>
        <button onClick={switchLanguage} className="languageButton">
          {language === 'English' ? 'РУС' : 'ENG'}
        </button>
        {account ? (
          <button className="connectButton">
            {t.connected}{account.substring(0,6)}...{account.substring(account.length - 4)}
          </button>
        ) : (
          <button onClick={connectWallet} className="connectButton">{t.connectMetamask}</button>
        )}
      </div>
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
