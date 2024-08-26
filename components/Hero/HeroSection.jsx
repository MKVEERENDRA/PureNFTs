import React, { useContext } from "react";
import Image from "next/image";
import Style from './HeroSection.module.css';
import { NFTMarketPlaceContext } from "@/context/NFTMarketPlace";
import { Button } from "../Comindex";
import images from '../../img';
import { title } from "process";
const HeroSection=() =>{
    const {title} =useContext(NFTMarketPlaceContext);
    return (<div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
            <h1>{title} </h1>
            <p>Select the NFT you want and complete your purchase using cryptocurrency. Our platform supports multiple cryptocurrencies for your convenience.
            </p>
            <Button btnName='Start your Search'/>
</div>
<div className={Style.heroSection_box_right}>
    <Image className={Style.heroSection_box_right_img} src={images.hero} alt="Hero sec" width={600} height={600}/>
</div>
        </div>
    </div>)
};
export default HeroSection;