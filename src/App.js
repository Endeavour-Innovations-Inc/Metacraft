import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';
import logo from './logo.svg'; // Assuming the logo file is at the same level

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
        <h1>Welcome to BoomToken ICO</h1>
        <img src={logo} alt="Token Icon" className="token-icon" />
        <div className="info-container">
          <div className="presale-container rounded-rect">
          <div className="presale-boomtoken">
            <div className="token-details">
              <h3 className="green-text">Presale</h3>
              <h2>BoomToken <img src={logo} alt="Token Icon Small" className="token-icon-small" /></h2>
            </div>
            <button className="metamask-button">Add to MetaMask</button>
          </div>
            <ol className="buy-instructions">
              <p><strong>Instructions</strong></p>
              <li>Install MetaMask.</li>
              <li>Connect your wallet.</li>
              <li>Enter the amount of BNB you want to spend.</li>
              <li>Click on the "Buy" button.</li>
            </ol>
          </div>
          <div className="purchase-container rounded-rect">
            <div className="input-group">
              <label htmlFor="amount" className="input-label">AmountBNB</label>
              <input id="amount" type="text" placeholder="0.00" className="amount-input" />
            </div>
            <div className="input-group">
              <label htmlFor="price" className="input-label">Token Price</label>
              <input id="price" type="text" value="$1" readOnly className="token-price" />
            </div>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
