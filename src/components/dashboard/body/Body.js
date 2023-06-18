import React from 'react';
import './Body.css';
import logo from './logo.svg';

const Body = ({ t }) => {
  return (
    <div className="main">
      <h1 className="dark-text">{t.welcome}</h1>
      <div className="info-container">
        <div className="presale-container rounded-rect">
          <div className="presale-boomtoken">
            <div className="token-details">
              <h3 className="green-text">{t.presale}</h3>
              <h2>VierTrust <img src={logo} alt="Token Icon Small" className="token-icon-small" /></h2>
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
  );
};

export default Body;
