import React, { useState } from 'react';
import Image from 'next/image';
import images from '../../img';
import { NFTCardTwo } from '@/collectionPage/collectionIndex';
import Style from "./AuthorNftCardBox.module.css";
import FollowerTabCard from '@/components/FollowerTab/FollwerTabCard/FollowerTabCard';


const AuthorNftCardBox = ({collectiables,created,like,follower,following,nfts,myNFTS}) => {
  const [s,setmk] =useState(true);
  const collectiablesArray=[
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
 
  ];
  const createdArray=[
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  const likeArray=[
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  const followerArray=[
 {
    background:images.creatorbackground1,
    user:images.user1,
    seller:"X0005rcfgvgv94847",
   
 },
 {
    background:images.creatorbackground2,
    user:images.user2,
    seller:"X0005rcfgvgv94847",

   
 },
 {
    background:images.creatorbackground3,
    user:images.user3,
    seller:"X0005rcfgvgv94847"
,
   
 },
 {
    background:images.creatorbackground4,
    user:images.user4,
    seller:"X0005rcfgvgv94847",
   
 },
 {
    background:images.creatorbackground5,
    user:images.user5,
    seller:"X0005rcfgvgv94847",
   
 }
  
  ];
  const followingArray=[
   
     {
        background:images.creatorbackground2,
        user:images.user2,
       
     },
   
     {
        background:images.creatorbackground4,
        user:images.user4,
       
     },
     {
        background:images.creatorbackground5,
        user:images.user5,
       
     }
   
  ];
  console.log("eranna",nfts);
  console.log("erannamu",myNFTS);


    return (
    <div className={Style.AuthorNftCardBox}>
        {collectiables &&
            <NFTCardTwo  NFTData={nfts}/>
        }
           {created &&
            <NFTCardTwo NFTData={myNFTS} />
        }
           {like &&
            <NFTCardTwo NFTData={likeArray} />
        }
       {
        follower &&
<div className={Style.AuthorNftCardBox_box} >

{
    followerArray.map((el,i)=>(
        <FollowerTabCard  i={i} el={el} />
    ))
}

</div>        }
{
        following &&
<div className={Style.AuthorNftCardBox_box} >

{
    followingArray.map((el,i)=>(
        <FollowerTabCard  i={i} el={el} />
    ))
}

</div>        }
       
    </div>
    );
};

export default AuthorNftCardBox;
