import React, {useState} from 'react';
import Image from 'next/image';
import images from '../../img';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import Style from "./NFTCardTwo.module.css";
import Link from 'next/link';

import { LikeProfile } from '@/components/Comindex';
import { usePathname } from 'next/navigation';
const NFTCardTwo = ({NFTData}) => {
  const [like,setLike] =useState(false);
  const [likeIns,setLikeInc] =useState(21);
  const likeNFT =() =>{
    if(!like){
        setLike(true);
        setLikeInc(likeIns+1);
    } 
    else{
        setLike(false);
        setLikeInc(23+1);
    }
  } ;     

    return (
    <div className={Style.NFTCardTwo}>
        
        {NFTData && NFTData.length > 0 ? (
             NFTData.map((el,i)=>(
            

                <Link href={{pathname:"/Nft-details",query:el  }} key={i} >
               <div className={Style.NFTCardTwo_box} key={i+1}>
                  
  <div className={Style.NFTCardTwo_box_like}>
      <div className={Style.NFTCardTwo_box_like_box}>
          <div className={Style.NFTCardTwo_box_like_box_box}>
  <BsImage className={Style.NFTCardTwo_box_like_box_box_icon}/>     
  <p onClick={()=> likeNFT()}>
  {like ? <AiOutlineHeart/> :
  <AiFillHeart/>} 
  {""} <span>{likeIns +1}</span>
  
  </p>
     </div>
          <div className={Style.NFTCardTwo_box_like_box_text}>
  
          </div>
      </div>
  </div>
  <div></div>
  <div className={Style.NFTCardTwo_box_img}>
      <Image src={el.image} alt='NFT' width={300} height={290} className={Style.NFTCardTwo_box_img_img} style={{ objectFit: 'cover' }}/>
  </div>
  <div className={Style.NFTCardTwo_box_info}>
      <div className={Style.NFTCardTwo_box_info_left}>
          <LikeProfile/>
          <br/>
          <p>{el.name}
             
          </p>
      </div>
      <small>4{i+2}</small>
  </div>
  <div className={Style.NFTCardTwo_box_price}>
      <div className={Style.NFTCardTwo_box_price_box}>
          <small>Current Bid</small>
          <p>{el.price} ETH</p>
          
  
      </div>
  
      <p className={Style.NFTCardTwo_box_price_stocks}>
          <MdTimer/> <span>{i+1} Hours Left</span>
      </p>
     
  </div>
  
  
  </div>
                </Link>
            
                      
              
  
  
          ))
 
  ) : (
    <p>No NFTs available</p> // Or a loading spinner
  )}

   
        
    </div>
    );
};

export default NFTCardTwo;
