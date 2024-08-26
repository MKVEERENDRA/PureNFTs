import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import images from "../../../img";

import Style from "./DayComponent.module.css";
import { ST } from 'next/dist/shared/lib/utils';

const DayComponent = ({el,i}) => {
  
    return (
        <div className={Style.day}>
  <div className={Style.daysComponent}>
        <div className={Style.daysComponent_box} >
            <div className={Style.daysComponent_box_img}>
                
                        <Image src={el.background} alt='profile_background' className={Style.daysComponent_box_img_img} width={300} height={150} style={{ objectFit: 'cover' }} />


                    </div>
                    <div className={Style.daysComponent_box_profile}>
<Image src={images.creatorbackground2} alt="profile" width={100} height={100} className={Style.daysComponent_box_profile_img_1}  style={{ objectFit: 'cover' }}/>
<Image src={images.creatorbackground2} alt="profile" width={100} height={100} className={Style.daysComponent_box_profile_img_2}  style={{ objectFit: 'cover' }}/>
<Image src={images.creatorbackground2} alt="profile" width={100} height={100} className={Style.daysComponent_box_profile_img_3}   style={{ objectFit: 'cover' }}/>

                    </div>
                   <div className={Style.daysComponent_box_title}>
                    <h2 >Amazing Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image src={el.user} alt="profile" width={30} height={30} objectFit='covers' className={Style.daysComponent_box_title_info_profile_img}/>
                            <p>Creator</p>
                            <span>Eranna  {" "} <small><MdVerified/></small> </span>
                        </div>

                        <div className={Style.daysComponent_box_title_info_price}>
                            <span>1.22 ETH</span>
                        </div>
                    </div>
                   </div>
            
            </div>
        </div>
        </div>
  
        
    );
};

export default DayComponent;
