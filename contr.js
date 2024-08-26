import { ethers } from "ethers";
import { NFTMarketPlaceAbi } from "./context/Constants";

export const getContract = async (address) => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(address, NFTMarketPlaceAbi, signer);
            return contract;
        } catch (error) {
            console.error("Error creating contract instance:", error);
            return null;
        }
    } else {
        console.error("Ethereum wallet is not available");
        return null;
    }
};

export const getMarketContract = async () => {
    const marketAddress = process.env.NEXT_PUBLIC_MARKET_CONTRACT_ADDRESS || "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    return await getContract(marketAddress);
};
