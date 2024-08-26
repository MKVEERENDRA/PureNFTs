import React from 'react';
import Image from 'next/image';
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  
    return (
    <div className={Style.service}>
        <div className={Style.service_box}>
        <div className={Style.service_box_item}>
       <Image src={images.service1} alt="Fil&DIS" width={100}
 height={100}/>
 <p className={Style.service_box_item_step}>
<span>Step 1</span>

 </p>
 <h3>Filter & Discover</h3>
 <p>Use search and filters to find your desired NFT, narrowing down by price, category, and creator.
 </p>
 </div>
 <div className={Style.service_box_item}>
       <Image src={images.service2} alt="Connect Wallet" width={100}
 height={100}/>
 <p className={Style.service_box_item_step}>
<span>Step 2</span>

 </p>
 <h3>Connect Wallet</h3>
 <p>Connect your crypto wallet to Mweb3, then buy or bid on your chosen NFT to complete the purchase.
 </p>
 </div>
 <div className={Style.service_box_item}>
       <Image src={images.service3} alt="Start Trading" width={100}
 height={100}/>
 <p className={Style.service_box_item_step}>
<span>Step 3</span>

 </p>
 <h3>Start Trading</h3>
 <p>Buy or bid on your chosen NFT to complete the purchase.
 </p>
 </div>
       </div>
    </div>
    );
};

export default Service;