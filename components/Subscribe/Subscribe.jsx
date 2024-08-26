import React from 'react';
import {RiSendPlaneFill} from "react-icons/ri";
import images from '../../img'
import Image from 'next/image';
import Style from "./Subscribe.module.css";

const Subscribe = ({btnName,handleClick}) => {
  
    return (
    <div className={Style.subscribe}>
       <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
            <h2>Not again miss a Drop</h2>
            <p>Subscribe to our Super-Exclusive List so that you be first to know abour upcoming drops</p>
       
       <div className={Style.subscribe_box_left_box}>
        <span>01</span>
        <small>Get more discount</small>
       </div>
       <div className={Style.subscribe_box_left_box}>
        <span>02</span>
        <small>Get Premium magazines</small>
       </div>
       <div className={Style.subscribe_box_left_input}>
       <input type='email' placeholder='Enter Your Email'/>
       <RiSendPlaneFill className={Style.subscribe_box_left_input_icon}/>
       </div> 

        </div>
        <div className={Style.subscribe_box_right}>
            <Image className={Style.subscribe_box_right_img} src={images.update} alt="Get Update" height={600} width={800}/>
        </div>
       </div>
    </div>
    );
};

export default Subscribe;
