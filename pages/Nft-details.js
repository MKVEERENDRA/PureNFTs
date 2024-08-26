import React, { useEffect, useState,useContext } from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/Nft.module.css";
import { Button,Category,Brand } from '@/components/Comindex';
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';

import { useRouter } from 'next/router';
const Nftdetails = ({ }) => {
    const {currentAccount} =useContext(NFTMarketPlaceContext);
    const [nft,setNft] =useState({
        id: '',
        name: '',
        image: '',
        description: '',
        owner: '',
        price: '',
        category: '',
        website: '',
        tokenId:"",
        royalties:"",
        category:"",
        properties:"",
        NoOf:"",
        
        seller:""
    });
    console.log("MK Data",nft);
  const router =useRouter();
  useEffect(()=>{
    if(!router.isReady) return;
    const nftData = router.query;
  console.log('NFT Data:', nftData); // Check the data structure

    setNft(router.query);
    console.log("MK Data",nft);

  },[router.isReady]);
    return (
    <div className={Style.box}>
<NFTDetailsPage nft ={nft}/>
<Category/>
    <Brand/>
    </div>
    );
};

export default Nftdetails;
