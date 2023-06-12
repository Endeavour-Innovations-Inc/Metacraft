import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [language, setLanguage] = useState('English');

  // Code to switch language
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
      alert('Please install MetaMask!');
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to connect to MetaMask');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };  

  return (
    <div className="App">
      <div className="header">
        <button onClick={switchLanguage} className="languageButton">
          {language === 'English' ? 'РУС' : 'ENG'}
        </button>
        {account ? (
          <p className="accountInfo">Connected with the account: {account}</p>
        ) : (
          <button onClick={connectWallet} className="connectButton">Connect to MetaMask</button>
        )}
      </div>
      <div className="main">
        <h1>Welcome to Our ICO</h1>
      </div>
    </div>
  );
}

export default App;
