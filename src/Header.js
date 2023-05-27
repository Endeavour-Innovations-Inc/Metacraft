import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function Header() {
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      // creating a new Web3 instance
      const web3 = new Web3(window.ethereum);
      checkIfWalletIsConnected(web3);
    } else {
      alert('Please install MetaMask!');
    }
  }, []);

  const checkIfWalletIsConnected = async (web3) => {
    // check if we're authorized to access the user's wallet
    const accounts = await web3.eth.getAccounts();
    if (accounts.length !== 0) {
      // if we have access to the wallet, save the user's account to the state
      setAccount(accounts[0]);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // request access to the user's wallet
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

        // save the user's account to the state
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
