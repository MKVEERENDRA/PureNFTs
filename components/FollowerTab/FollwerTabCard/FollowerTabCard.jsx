import React, { useState,useEffect}from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import Style from "./FollowerTabCard.module.css";
import images from "../../../img";
import { ST } from 'next/dist/shared/lib/utils';
import { Button } from '@/components/Comindex';
const FollowerTabCard = ({ i, el}) => {
  const [following,setFollowing] =useState(false);
const followMe =() =>
    {
        if(!following) {
setFollowing(true);
        }
        else{
            setFollowing(false);
        }
    };
    return (
    <div className={Style.FollowerTabCard}>
<div className={Style.FollowerTabCard_rank}>
    <p>
#{i+1} <span>🎖️</span>

    </p>
    
    </div>  
    <div className={Style.FollowerTabCard_box}>
<div className={Style.FollowerTabCard_box_img}>
    <Image src={el.background ||images.creatorbackground10} alt="profile back" width={300} height={200} className={Style.FollowerTabCard_box_img_img}/>
</div>
<div className={Style.FollowerTabCard_box_profile}>
    <Image className={Style.FollowerTabCard_box_profile_img} alt='Profile Pic' width={50} height={50} src={el.user||images.user2}></Image>
</div>
    <div className={Style.FollowerTabCard_box_info}>
    <div className={Style.FollowerTabCard_box_info_name}>
        <h4>{el.seller.slice(0,9)} {" "}
            <span><MdVerified/></span>
        </h4>
        <p>{el.total|| 0 }ETH</p>
     
    </div>
    <div className={Style.FollowerTabCard_box_info_following}>
  
{following ? (
    <a onClick={()=> followMe()}>
Follow{""} <span><TiTick/></span>

    </a>
)  :
(
    <a onClick={()=> followMe()}>
        Following
    </a>
)
}

    </div>
        </div>
    </div>
    
      </div>
    );
};

export default FollowerTabCard;
