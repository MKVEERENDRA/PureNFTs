import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia,polygonAmoy} from 'wagmi/chains';
import {http,createConfig} from '@wagmi/core';
import { injected } from '@wagmi/connectors';

// Define the projectId directly
export const projectId = 'BTeFNsqvZQ3n6WacRdUT1P4U-KSXkaOA';

export const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

// Create wagmiConfig
const chains = [mainnet, sepolia,polygonAmoy];


export const config = defaultWagmiConfig({
  chains,
  projectId,
  
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  
});
