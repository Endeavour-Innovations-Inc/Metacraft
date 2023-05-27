import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function Header() {
  const [account, setAccount] = useState('');
  const web3 = new Web3(window.ethereum);

  useEffect(() => {
    if (window.ethereum) {
      checkIfWalletIsConnected();
    } else {
      alert('Please install MetaMask!');
    }
  }, [checkIfWalletIsConnected]);

  const checkIfWalletIsConnected = async () => {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length !== 0) {
      setAccount(accounts[0]);
    }
  };

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
    <div className="header">
      {account ? (
        <p>Connected with the account: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect to MetaMask</button>
      )}
    </div>
  );
}

export default Header;
