import React, { useState,useContext,useEffect } from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./NFTDetailsImg.module.css";
import { BsImages } from 'react-icons/bs';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown,TiArrowSortedUp } from 'react-icons/ti';

import {fetchNfts} from "../../context/NFTMarketPlace"
const NFTDetailsImg = ({nft}) => {
  const [like,setLike] =useState(false);
  const[description,setDescription] = useState(true);
  const [details,setDetails] =useState(true);
const openDes = ()=>{
  if(!description){
    setDescription(true);
  }
  else{
    setDescription(false);
  }
};

const openDetails = ()=>{
  if(!details){
    setDetails(true);
  }
  else{
    setDetails(false);
  }
}

const likeNFT = () => {
  if(!like){
    setLike(true);
  }
  else{
    setLike(false);
  }
}   ;     console.log("Release",nft.price);
console.log("Release Ra",nft.tokenId);
console.log("Ra Vamshi",nft);




    return (
    <div className={Style.NFTDetailsImg}>
       <div className={Style.NFTDetailsImg_box}>
       <div className={Style.NFTDetailsImg_box_NFT}>
       <div className={Style.NFTDetailsImg_box_NFT_like}>
      <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
      <p onClick={() =>likeNFT() }>
        {like? <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/> : <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon}/>}
        {""} <span>{123}</span>
      </p>
    </div>
    <div className={Style.NFTDetailsImg_box_NFT_img}>
      <Image src={nft.image} alt='NFT' width={600} height={600} style={{ objectFit: 'cover' }} className={Style.NFTDetailsImg_box_NFT_img_img}/>
    </div>
    </div>
    <div className={Style.NFTDetailsImg_box_d}>
    <div className={Style.NFTDetailsImg_box_desc} onClick={() =>openDes()} >
      <p>Description</p>
      {
        description? <TiArrowSortedUp className={Style.NFTDetailsImg_box_desc_icon}/> : <TiArrowSortedDown className={Style.NFTDetailsImg_box_desc_icon}/>
      }
    </div>
    
    {
      description && (
        <div className={Style.NFTDetailsImg_box_desc_box}>
        <p>
          {nft.description}
        </p>
        </div>
      )
    }
    
    <div className={Style.NFTDetailsImg_box_details} onClick={() => openDetails()}>
      <p>Details</p>
      {
        details? <TiArrowSortedUp className={Style.NFTDetailsImg_box_details_icon}/> : <TiArrowSortedDown className={Style.NFTDetailsImg_box_details_icon}/>
      }
    </div>
    {
      details && (
        <div className={Style.NFTDetailsImg_box_details_box}>
        <p>Artist: <nb/> {nft.name}
        </p>
        <br/>

        <p>Artist's Website: {nft.website}</p>
      <p> Contract Address:</p> 
       <p>{nft.seller}</p>
        <p>Release Date: 2022-01-01</p>
        <p>Type: {nft.category}</p>
        <p>Price: {nft.price}
          
        </p>
       
        <p>Sale End Date: 2022-12-31</p>
        <p>    properties:{nft.properties}
        </p>
        <p>royalties:{nft.royalties}</p>
        </div>
      )
    }



    </div>
    

      </div>
    </div>
    );
};

export default NFTDetailsImg;
