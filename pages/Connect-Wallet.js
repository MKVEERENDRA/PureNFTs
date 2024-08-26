// components/ConnectWallet.js
import React, { useState,useContext } from 'react';
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import images from '../img';
import Style from "../styles/connect.module.css";
import {NFTMarketPlaceContext} from "../context/NFTMarketPlace";
const ConnectWallet = ({ btnName, handleClick, icon, classStyle }) => {
  const [activeBtn, setActiveBtn] = useState(null);
  const { connectors, connect } = useConnect();
  const {currentAccount,connectWallet} =useContext(NFTMarketPlaceContext)
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();

  const providerArray = [
    {
      name: 'Metamask',
      connector: connectors[0], // Assuming the first connector is MetaMask
      provider: images.provider1,
    },
    {
      name: 'WalletConnect',
      connector: connectors[1], // Assuming the second connector is WalletConnect
      provider: images.provider1,
    },
    {
      name: 'Trust Wallet',
      connector: connectors[2], // Assuming the third connector is Trust Wallet
      provider: images.provider1,
    },
    {
      name: 'Binance',
      connector: connectors[3], // Assuming the fourth connector is Binance
      provider: images.provider1,
    },
  ];

  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet to start trading and minting NFTs!</h1>
        <p className={Style.connectWallet_box_para}>
          Choose a wallet provider below and connect your wallet to Mweb3 to begin trading and minting NFTs.
        </p>
        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              key={i}
              className={`${Style.connectWallet_box_provider_item} ${activeBtn === i ? Style.active : ""}`}
              onClick={() => {
                setActiveBtn(i);
                connect(el.connector);
              }}
            >
              <Image src={el.provider} width={40} height={40} alt={el.name} className={Style.connectWallet_box_provider_item_img} />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        {isConnected && (
          <button onClick={() => disconnect()}>Disconnect {address}</button>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
