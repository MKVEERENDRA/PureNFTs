import React from 'react';
import Image from 'next/image';
import images from '../../../img';
import LikeProfile from '../../LikeProfile/LikeProfile';
import Style from "./SliderCard.module.css";
import {motion} from "framer-motion";
const SliderCard = ({eL,i}) => {
  
    return (
     <motion.div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
<motion.div className={Style.sliderCard_box_img}>
    <Image src={eL.background} alt="profile" width={294} height={200} style={{ objectFit: 'cover' }} className={Style.sliderCard_box_img_img}/>
</motion.div>
<div className={Style.sliderCard_box_title}>
    <p>NFT Video #123</p>
    <div className={Style.sliderCard_box_title_like}>
     { /*  <LikeProfile/>*/}
        <small>1 of 100</small>
    </div>
</div>
<div className={Style.sliderCard_box_price}
>
    <div className={Style.sliderCard_box_price_box}>
        <small>Current Bid</small>
        <p>1.00 ETH</p>
    </div>
    <div className={Style.sliderCard_box_price_time}>
        <small>Remaining time</small>
        <p>3h: 15m: 20s</p>
    </div>
</div>
        </div>
        </motion.div>

    );
};

export default SliderCard;
