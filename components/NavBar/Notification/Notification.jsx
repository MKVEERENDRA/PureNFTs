import React from 'react';
import Style from './Notification.module.css';
import Image from "next/image";
import images from "../../../img";
const Notification = () => {
    return (
        <div className ={Style.notification}>
<p>Notification   </p>
<div className={Style.notification_box}>
    <div className={Style.notification_box_img}>
        <Image src={images.user1} alt="profile" width={50} height={50} className={Style.notification_box_img}/>
    </div>
    <div className={Style.notification_box_info}>
        <h4>Vishnu</h4>
        <p>Measure the action of user</p>
        <small>3 min ago</small>
    </div>
    <span className={Style.notification_box_new}></span>
</div>


     </div>
    );
}

export default Notification;
