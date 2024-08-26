import React , {useState,useEffect,useCallback}from 'react';
import Style from './BigNftSider.module.css';
import Image from 'next/image';
import images from '../../img';
import Button from '../Button/Button';
import {AiFillFire,AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import { MdVerified,MdTimer } from 'react-icons/md';

import { TbArrowBigLeftLine,TbArrowBigRightLine } from 'react-icons/tb';
const BigNftSider = () => {
  const [idNumber,setIdNumber] =useState(1);
  
  const sliderData =[
    {
        title:"Hello NFT",
        id:1,
        name:"Veerendra Vamshi",
        collection:"Games",
        price:"000078789 ETH",
        like:243,
        image:images.user1,
        nftImage:images.nft_image_1,
        time:{
            days:27,
            hours:10,
            minutes:11,
            seconds:35,
        },},
        {
            title:"Welcome NFT",
            id:2,
            name:"Eranna",
            collection:"Games",
            price:"000099789 ETH",
            like:243,
            image:images.user2,
            nftImage:images.nft_image_2,
            time:{
                days:27,
                hours:10,
                minutes:11,
                seconds:35,
            },},{
                title:"EWWW NFT",
                id:3,
                name:"Vishnu",
                collection:"Games",
                price:"000178789 ETH",
                like:243,
                image:images.user3,
                nftImage:images.nft_image_3,
                time:{
                    days:27,
                    hours:10,
                    minutes:11,
                    seconds:35,
                },},
                {
                    title:"Home NFT",
                    id:4,
                    name:"murali",
                    collection:"Games",
                    price:"001078789 ETH",
                    like:243,
                    image:images.user4,
                    nftImage:images.nft_image_2,
                    time:{
                        days:27,
                        hours:10,
                        minutes:11,
                        seconds:35,
                    }
            
        
    

    }
  ];
  const inc = useCallback(()=>{
    if(idNumber+1 <sliderData.length){
        setIdNumber(idNumber+1);
    }
    if(idNumber==sliderData.length){
        setIdNumber(idNumber);
    }

  },[idNumber,sliderData.length]);

  const dec=useCallback(()=>{
    if(idNumber >0){
        setIdNumber(idNumber - 1);
    }

  },[idNumber]);

    return (
    <div className={Style.bigNFTSlider}>
         <div className={Style.bigNFTSlider_box}>
         <div className={Style.bigNFTSlider_box_left}>
<h2>{sliderData[idNumber].title}</h2>
<div className={Style.bigNFTSlider_box_left_creator}>
<div className={Style.bigNFTSlider_box_left_creator_profile}>
    <Image  className={Style.bigNFTSlider_box_left_creator_profile_img}  src={sliderData[idNumber].image} alt="profile-pic" width={50} height={50}/>
<div className={Style.bigNFTSlider_box_left_creator_profile_img}>
    <p>Creator</p>
    <h4>{sliderData[idNumber].name}{" "} <span><MdVerified/></span> </h4>
</div>
       </div>
       <div className={Style.bigNFTSlider_box_left_creator_collection}>
        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}/>
        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
            <p>Collection</p>
            <h4>{sliderData[idNumber].collection}</h4>
        </div>
       </div>
</div>
<div className={Style.bigNFTSlider_box_left_bidding}>
    <div className={Style.bigNFTSlider_box_left_bidding_box}>
        <small>Current Bid</small>
        <p>{sliderData[idNumber].price}<span>$22,222</span></p>
    </div>
    <p className={Style.bigNFTSlider_box_left_bidding_box_aution}>
        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
        <span>Auction ending in</span>
    </p>
    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
            <p>{sliderData[idNumber].time.days}</p>
<span>Days</span>
        </div>
        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
            <p>{sliderData[idNumber].time.hours}</p>
<span>Hours</span>
        </div>
        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
            <p>{sliderData[idNumber].time.minutes}</p>
<span>min</span>
        </div>
        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
            <p>{sliderData[idNumber].time.seconds}</p>
<span>sec</span>
        </div></div>

    <div className={Style.bigNFTSlider_box_left_button}>
        <Button btnName="Place" handleClick={() => {}}/>
        <Button btnName="view" handleClick={() => {}}/>

    </div>
</div>
<div className={Style.bigNFTSlider_box_left_sliderBtn}>
<TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
onClick={()=> dec()}

/>    
<TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
onClick={()=> inc()}

/> 
</div>

         </div>
         <div className={Style.bigNFTSlider_box_right}>
<div className={Style.bigNFTSlider_box_right_box}>
    <Image  className={Style.bigNFTSlider_box_right_box_img} src ={sliderData[idNumber].nftImage} alt='NFT Image'/>
    <div className={Style.bigNFTSlider_box_right_box_like}>
        <AiFillFire/>
        <span >{sliderData[idNumber].like}</span>
    </div>
</div>

         </div>
         </div>
    </div>
    );
};

export default BigNftSider;