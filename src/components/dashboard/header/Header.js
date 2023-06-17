import React, { useEffect } from 'react';
import Web3 from 'web3';

const translations = {
  English: {
    connected: "Connected: ",
    connectMetamask: "Connect to MetaMask"
  },
  Russian: {
    connected: "Подключено: ",
    connectMetamask: "Подключиться к MetaMask"
  }
};

const Header = ({ language, switchLanguage, account, setAccount }) => {
  const t = translations[language];

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
  );
};

export default Header;
