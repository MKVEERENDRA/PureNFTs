import React, { useState, useEffect, createContext } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NFTMarketPlaceAbi1,NFTMarketAddress1,bytecode } from './constantsremix';
import { config } from '../config';
import { BigNumber, ethers } from 'ethers';
export const NFTMarketPlaceContext = createContext();
const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketAddress1, NFTMarketPlaceAbi1, signerOrProvider);
export const NFTMarketPlaceProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState("");
  const [openerror, setOpenerror] = useState(false);
  const [signer, setSigner] = useState(null);

  const uei="https://polygon-amoy.g.alchemy.com/v2/BTeFNsqvZQ3n6WacRdUT1P4U-KSXkaOA";
 const uei2= "https://eth-mainnet.g.alchemy.com/v2/jyDIa4u5Su99z0yPRYvc6uVm0sljrAwU";
  const router = useRouter();

  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setCurrentAccount(address);
    }
  }, [isConnected, address]);

  useEffect(() => {
    const initializeProvider = async () => { 
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const browserProvider = new ethers.BrowserProvider(window.ethereum);
          setProvider(browserProvider);
          console.log("Connected to Ethereum network");
          const walletSigner = await browserProvider.getSigner();
          setSigner(walletSigner);
          console.log("Connected to MetaMask");
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
          toast.error("MetaMask connection failed");
           
        }
      } else {
        const defaultProvider = ethers.getDefaultProvider();
        setProvider(defaultProvider);
        setOpenerror(true),
        error(" MetaMask not installed; using read-only defaults");


      }
    };
    initializeProvider();
  }, []);
const connectwithsmartContract = async () =>{
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    console.log("Connected to Ethereum network1",browserProvider);
    const walletSigner = await browserProvider.getSigner();
    console.log("Connected to MetaMask1",walletSigner);
    const contract = fetchContract(walletSigner);
    console.log("contract", contract);
    return contract;
  } catch (error) {
    console.error("Error connecting to MetaMask1:", error);
    toast.error("MetaMask connection failed1");
  }
}



  const uploadToIPFS = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: '243ce9acc91f9ed354ca',
            pinata_secret_api_key: 'bd96c34e962cf1686d70350205562b36190ebf8c61058601e98a750dbe9d2ca8',
          },
        });
        const ipfsHash = response.data.IpfsHash || response.data.ipfsHash;
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
        console.log("IPFS uploaded:", ImgHash);
        return ImgHash;
      } catch (e) {
        console.error("Error uploading file:", e);
        return null;
      }
    }
  };

  const createNft = async (name, price, image, description,website, royalties, size, category, properties,NoOf) => {

    const data = JSON.stringify({ name,price,  image,description , website, royalties, size, category, properties,NoOf });
    try {
      const response = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', data, {
        headers: {
          'Content-Type': 'application/json',
          pinata_api_key: '243ce9acc91f9ed354ca',
          pinata_secret_api_key: 'bd96c34e962cf1686d70350205562b36190ebf8c61058601e98a750dbe9d2ca8',
        },
      });
      if (response.data && response.data.IpfsHash) {
        const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        console.log("IPFS URL:", url);
        await createSale(url, price);
        router.push('/search');

      } else {
        throw new Error("IPFS hash is missing in the response");
      }
    } catch (e) {
      console.error("Error uploading data to IPFS:", e.message);
      toast.error("Error creating NFT");
    }
  };

  const createSale = async (url, formInputPrice, isReselling , id) => {
    try {
      if (!formInputPrice || typeof formInputPrice !== 'string' || formInputPrice.trim() === '') {
        throw new Error("Price must be a valid non-empty string");
      }
      if (!signer) {
        throw new Error("Signer is not initialized");
      }
      const provider1 = new ethers.JsonRpcProvider(uei);
      console.log("provider1sa", provider1)



      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract1 = fetchContract(provider1);
      console.log("contract", contract1);
      if (!contract1) throw new Error("Could not get contract instance");
  
      // Get listing price from the contract
      const listingPrice = await contract1.getListingPrice();
  
      console.log(listingPrice,"This is Listing Price");
  
      if (listingPrice.toString() === '0') {
        throw new Error("Listing price is 0");
      }
      const contract2 = fetchContract(signer);
  
      const transaction = isReselling
        ? await contract2.resellToken(id, price, { value: listingPrice })
        : await contract2.createToken(url, price, { value: listingPrice });
  
      await transaction.wait();
      toast.success("Successfully created NFT");
    } catch (error) {
      console.error("Error creating sale:", error);
      toast.error("Error creating sale");
    }
  };
  

  const fetchNFTs = async () => { 
    try {
      const provider2 = new ethers.JsonRpcProvider(uei);
      const contract3 = fetchContract(provider2);
  
      if (!contract3) throw new Error("Could not get contract instance");
  
      const data = await contract3.fetchMarketItem();
      console.log('Market Items:', data);
  
      const items = await Promise.all(
        data.map(async ({tokenId, seller, owner, price: unformattedPrice}) => {
          const tokenURI = await contract3.tokenURI(tokenId);
          const response = await axios.get(tokenURI);
          const {
            data: { image, name, description, royalties, properties, website, category, size ,NoOf}
          } = await axios.get(tokenURI);
          console.log("tokenId", tokenId);

          console.log("tokenURI", tokenURI);
          console.log(data);
          const price = ethers.formatUnits(unformattedPrice.toString(), "ether");
          console.log("price", price);
          return {
            tokenId:tokenId.toString(),
            owner,
            NoOf,
            seller,
            price,
            image,
            royalties,
            size,
            properties,
            category,
            website,
            name,
            tokenURI,
            description,
          };
        })
      );
    

      return items;
      
  
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  };
  

  const fetchItemsListed = async (type) => {
    try {
      console.log("Initializing provider for fetchItemsListed...");
      const provider1 = new ethers.JsonRpcProvider(uei);

      console.log("Fetching contract instance...");
      const contract4 = await connectwithsmartContract();
      if (!contract4) throw new Error("Could not get contract instance");


      console.log("Fetching items listed...",contract4);
      const data = type == "fetchItemsListed" ?  await contract4.fetchItemsListed():
      await contract4.fetchMyNFTs();
      console.log('Fetched items in fetchItemsListed:', data);

      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
          console.log("Fetching tokenURI for tokenId:", tokenId);
          const tokenURI = await contract4.tokenURI(tokenId);
          console.log("Fetched tokenURI:", tokenURI);

          const { data: { image, name, description }, } = await axios.get(tokenURI);
          console.log("Fetched metadata from tokenURI:", tokenURI);

          const price = ethers.formatUnits(unformattedPrice.toString(), "ether");
          console.log("Formatted price:", price);

          return {
            tokenId: tokenId.toString(),
            owner,
            seller,
            price,
            image,
            name,
            tokenURI,
            description,
          };
        })
      );

      console.log("Processed items:", items);
      return items;
    } catch (error) {
      console.error("Error in fetchItemsListed:", error);
    }
  };



  const buyNFT = async (nft) => {
    try {
      const contract =  fetchContract(signer);
      if (!contract) throw new Error("Could not get contract instance");
      const price = ethers.parseUnits(nft.price.toString(), "ether");
      console.log("Priced", price);
      const transaction = await contract.createMarketSale(nft.tokenId, { value: price });
      console.log("Transaction135", transaction);
      await transaction.wait();
      router.push("/author")
    } catch (error) {
      console.error("Error buying NFT:", error);
    }
  };

  useEffect(() => {
      fetchNFTs();
    
  }, []);

  return (
    <NFTMarketPlaceContext.Provider value={{
      uploadToIPFS, createNft, fetchItemsListed,
      fetchNFTs
      , buyNFT,
      createSale,
      currentAccount, title: "Discover, Collect and Sell NFTs"
    }}>
      {children}
    </NFTMarketPlaceContext.Provider>
  );
};
