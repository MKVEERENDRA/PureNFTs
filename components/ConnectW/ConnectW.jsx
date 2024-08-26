// components/ConnectButton.js
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import Style from "../ConnectW/Style.module.css"

const ConnectButton = () => {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className={Style.buttonContainer}>
   <w3m-button size ="md"/>

    </div>
  );
};

export default ConnectButton;
