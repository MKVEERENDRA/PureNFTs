// components/StyledConnectButton.js
import React from 'react';
import { ConnectButton as WagmiConnectButton } from '@web3modal/react';

const StyledConnectButton = () => {
  return (
    <WagmiConnectButton 
      style={{
        backgroundColor: 'rgb(2, 766, 77)',
        border: '1px solid bisque',
        color: 'bisque',
        padding: '1rem 2rem',
        fontSize: '1.444rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in',
        boxShadow: 'var(--box-shadow)',
        borderRadius: '2rem',
        width: '200px', // Adjust width as needed
      }}
    />
  );
};

export default StyledConnectButton;
