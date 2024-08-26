import React from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./NFTTabs.module.css";

const NFTTabs = ({dataTab,icon}) => {
  
    return (
    <div className={Style.NFTTabs}>
      {dataTab.map((el,i)=>(
        <div key={i+1} className={Style.NFTTabs_box}>
            <Image src={el} alt="profile-image" width={40} height={40}  className= {Style.NFTTabs_box_img}/>
            <div className={Style.NFTTabs_box_info} >
                <span>  Offered of $770 by <small>Eranna</small>      {icon} </span>
           
                <small>on Jun-14 -4:12 PM</small>
            </div>
        </div>
      ))}
    </div>
    );
};

export default NFTTabs;
