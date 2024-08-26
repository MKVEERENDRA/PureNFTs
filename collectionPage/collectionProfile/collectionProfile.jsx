import React from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./collectionProfile.module.css";
import {TiSocialFacebook,TiSocialLinkedin,TiSocialInstagram,TiSocialTwitter,TiArrowSortedDown,TiArrowSortedUp} from "react-icons/ti"; 
const CollectionProfile = () => {
  const cardArray =[1,2,3,4];
    return (
    <div className={Style.collectionProfile}>
       <div className={Style.collectionProfile_box}>
       <div className={Style.collectionProfile_box_left}>
       <Image src={images.nft_image_1} alt='nft_image_1' width={300} height={300} className={Style.collectionProfile_box_left_img} /> 
<div className={Style.collectionProfile_box_left_social} >
<a href='#'  >
<TiSocialFacebook/>


</a>
<a href='#'  >
<TiSocialTwitter/>


</a>
<a href='#'  >
<TiSocialLinkedin/>


</a>

<a href='#'  >
<TiSocialInstagram/>


</a>
</div>
 
    </div>
    <div className={Style.collectionProfile_box_middle}>
<h1>
    Awesome NFT Collection
</h1>
<p>Kanna is a home to 5,555 genarate arts  </p>
<div className={Style.collectionProfile_box_middle_box}>
{
    cardArray.map((el, i) =>    (
       
       <div className={Style.collectionProfile_box_middle_box_item} key={i+1} >
        <small>Floor Price</small>
<p>${i+1}95,468</p>
<span>+{i+2}.11%</span>
        </div>
    ))
}

</div>
    </div>
       </div>
    </div>
    );
};

export default CollectionProfile;
