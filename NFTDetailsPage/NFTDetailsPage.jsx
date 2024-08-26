import React from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "./NFTDetailsPage.module.css";
import {NFTDes,NFTDetailsImg,NFTTabs} from "./NFTDetailsPageIndex";
const NFTDetailsPage = ({nft}) => {
  console.log("NFT Details",nft);
  
    return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
      <NFTDetailsImg nft={nft}/>
      <NFTDes nft={nft}/>
      </div>
    </div>
    );
};

export default NFTDetailsPage;
