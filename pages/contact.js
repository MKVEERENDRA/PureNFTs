import React, { useState } from 'react';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import images from '../img';
import { HiOutlineMail } from 'react-icons/hi';
import formStyle from "../AccountPage/Form/form.module.css";
import { Button } from '@/components/Comindex';
import Style from "../styles/contact.module.css";
import { TiSupport } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa';

const contact = ({btnName,handleClick,icon,classStyle}) => {

    return (
    <div className={Style.contact}>
    <div className={Style.contact_box}>
    <h1>Contact Us</h1>
    <div className={Style.contact_box_box}>
    <div className={Style.contact_box_box_left}>
    <div className={Style.contact_box_box_left_item}>
        <h3> <TiSupport/>
        Address</h3>
        <p>123 Main St, Anytown, USA</p>
    
    </div>
    <div className={Style.contact_box_box_left_item}>
        <h3> Email</h3>
        <p><a href="mailto:info@example.com"><HiOutlineMail/> info@example.com</a></p>
    </div>
    <div className={Style.contact_box_box_left_item}>
        <h3> Phone No</h3>
        <p>000-123-456-3546</p>
    </div>
    <div className={Style.contact_box_box_left_item_social}>
        <h3> Social</h3>
        <a href="#"><TiSocialFacebook/> Facebook</a>
        <a href="#"><TiSocialLinkedin/> Linkdein</a>
        <a href="#"><TiSocialTwitter/> Twitter</a>
        <a href="#"><TiSocialYoutube/> Youtube</a>
        <a href="#"><TiSocialInstagram/> Instagram</a>

        
    </div>
    </div>
    <div className={Style.contact_box_box_right}>
        <form>
        <div className={formStyle.Form_box_input} >
            <label htmlFor="name">
                Username
            </label>
            <div className={formStyle.Form_box_input_box} >
                <div className={formStyle.Form_box_input_box_icon_u} >
                <FaUser />
                </div>
                <input type="text" id="name" name="name" required  placeholder='Mk Eranna' className={Style.Form_box_input_email}/>



            </div>
            
        </div>
        <div className={formStyle.Form_box_input} >
        <label htmlFor="email">
Email            </label>
                <div className={formStyle.Form_box_input_box} >
                <div className={formStyle.Form_box_input_box_icon} >
                    <HiOutlineMail />
                </div>
                <input type="email" id="email" name="email" required placeholder='mkeranna@gmail.com' className={Style.Form_box_input_email}/>



            </div>

        </div>
        <div className={formStyle.Form_box_input} >
        <label htmlFor="description">
            Description
            </label>
            <textarea id="description" name="description" required cols="30" rows='5' placeholder='Intellegence Addict' className={Style.Form_box_input_email}>
                </textarea>


        </div>

<Button btnName="Send Message" handleClick={() => {}}classStyle={Style.button}/>
        </form>
    
    </div>
    </div>
    </div>
    </div>
    );
};

export default contact;
