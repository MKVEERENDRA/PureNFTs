import { createPublicClient, createWalletClient, http, custom } from 'viem';
import { mainnet } from 'viem/chains';

// Create a public client (can be used both server-side and client-side)
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

// Initialize walletClient only on the client side
export let walletClient;
if (typeof window !== 'undefined' && window.ethereum) {
  walletClient = createWalletClient({
    chain: mainnet,
    transport: custom(window.ethereum),
  });
}

// Optionally, initialize WalletConnect provider on the client side
export const initializeWalletConnectProvider = async () => {
  if (typeof window !== 'undefined') {
    const { EthereumProvider } = await import('@walletconnect/ethereum-provider');

    const provider = await EthereumProvider.init({
      projectId: "3fa21741e33b28b78860472796d151bc",  // Your WalletConnect project ID
      showQrModal: true,
      chains: [1], // Chain ID for Ethereum mainnet
    });

    walletClient = createWalletClient({
      chain: mainnet,
      transport: custom(provider),
    });
  }
};
