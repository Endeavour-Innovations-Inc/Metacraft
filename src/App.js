import React, { useState } from 'react';
import './App.css';
import './components/dashboard/body/Body.css';
import Explosion from './components/effects/explosion/Explosion'; // import the Explosion component
import Header from './components/dashboard/header/Header';
import Body from './components/dashboard/body/Body';
import Footer from './components/dashboard/footer/Footer';

const translations = {
  English: {
    welcome: "Welcome to VierTrust ICO",
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
    welcome: "Добро пожаловать в VierTrust ICO",
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
      <Body t={t} />
      <Footer /> 
    </div>
  );
}

export default App;
