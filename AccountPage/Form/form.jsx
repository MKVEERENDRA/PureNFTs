import React from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./form.module.css";
import {HiOutlineMail} from "react-icons/hi"
import { MdOutlineHttp,MdOutlineContentCopy } from 'react-icons/md';
import { TiSocialFacebook,TiSocialTwitter,TiSocialInstagram } from 'react-icons/ti';
import { Button } from '@/components/Comindex';
import { FaUser } from 'react-icons/fa';
const form = () => {
 
    return (
    <div className={Style.Form}>
       <div className={Style.Form_box}>
       <form >
        <div className={Style.Form_box_input} >
            <label htmlFor="name">
                Username
            </label>
            <div className={Style.Form_box_input_box} >
                <div className={Style.Form_box_input_box_icon_u} >
                <FaUser />
                </div>
                <input type="text" id="name" name="name" required  placeholder='Mk Eranna' className={Style.Form_box_input_userName}/>



            </div>
            
        </div>
        <div className={Style.Form_box_input} >
            <label htmlFor="email">
                Email
            </label>
                <div className={Style.Form_box_input_box} >
                <div className={Style.Form_box_input_box_icon} >
                    <HiOutlineMail />
                </div>
                <input type="email" id="email" name="email" required placeholder='mkeranna@gmail.com' className={Style.Form_box_input_email}/>



            </div>

        </div>
        <div className={Style.Form_box_input} >
        <label htmlFor="description">
            Description
            </label>
            <textarea id="description" name="description" required cols="30" rows='5' placeholder='Intellegence Addict' className={Style.Form_box_input_description}>
                </textarea>


        </div>
        <div className={Style.Form_box_input} > 
            <label htmlFor="website">
                Website
            </label>
            <div className={Style.Form_box_input_box} >
                <div className={Style.Form_box_input_box_icon} >
                    <MdOutlineHttp />
                </div>
                <input type="url" id="website" name="website" required placeholder='https://www.mkeranna.com' className={Style.Form_box_input_website}/>
                
            </div>
        </div>
        <div className={Style.Form_box_input_social} >
            <div className={Style.Form_box_input}>
                <label htmlFor="facebook">
                    Facebook
                </label>
                <div className={Style.Form_box_input_box} >
                    <div className={Style.Form_box_input_box_icon} >
                        <TiSocialFacebook />
                    </div>
                    <input type="url" id="facebook" name="facebook" placeholder='https://www.facebook.com/mkeranna' className={Style.Form_box_input_facebook}/>
                </div>


            </div>
            <div className={Style.Form_box_input}>
                <label htmlFor="instagram">
                    Instagram
                </label>
                <div className={Style.Form_box_input_box} >
                    <div className={Style.Form_box_input_box_icon} >
                        <TiSocialInstagram />
                    </div>
                    <input type="url" id="instagram" name="instagram" placeholder='https://www.instagram.com/mkeranna' className={Style.Form_box_input_instagram}/>
                </div>


            </div>
            <div className={Style.Form_box_input}>
                <label htmlFor="Twitter">
                Twitter
                </label>
                <div className={Style.Form_box_input_box} >
                    <div className={Style.Form_box_input_box_icon} >
                        <TiSocialTwitter />
                    </div>
                    <input type="url" id="Twitter" name="Twitter" placeholder='https://www.Twitter.com/mkeranna' className={Style.Form_box_input_Twitter}/>
                </div>


            </div>
           </div>
            <div className={Style.Form_box_input}>
               <label htmlFor="Wallet address"></label>
               <div className={Style.Form_box_input_box} >
                <div className={Style.Form_box_input_box_icon} >
                    <MdOutlineHttp />
                </div>
                <input type="text" id="wallet address" name="wallet address" required placeholder='0xEA23456789abcdef0123456789abcdef0123456789' className={Style.Form_box_input_wallet}/>
               
               <div className={Style.Form_box_input_box_icon} >
                <MdOutlineContentCopy />

               </div>
               </div>
            </div>
            <div className={Style.Form_box_btn} >
                <Button btnName="Upload profile" handleClick={()=>{} } classStyle={Style.button} />
            </div>
       </form>
       </div>
    </div>
    );
};

export default form;
