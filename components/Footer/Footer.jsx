import React from 'react';
import Style from './Footer.module.css';
import Image from 'next/image';
import {TiSocialFacebook,TiSocialLinkedin,TiSocialInstagram,TiSocialTwitter,TiArrowSortedDown,TiArrowSortedUp} from "react-icons/ti"; 
import {RiSendPlaneFill} from 'react-icons/ri';
import images from '../../img';
import { Discover,HelpCenter } from '../NavBar';
const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
            <div className={Style.footer_box_social}>
<Image src={images.logo} alt='footer_logo' height={100} width={100}/>
<p>Dive into the world of digital art and collectibles on this NFT Marketplace. From exclusive artworks to rare collectibles, our platform offers a wide variety of NFTs to suit every taste and budget.

</p>
<div className={Style.footer_social}>
                    <a href="#">
                        <TiSocialFacebook />
                    </a>
                    <a href="#">
                        <TiSocialLinkedin />
                    </a>
                    <a href="#">
                        <TiSocialTwitter />
                    </a>
                    <a href="#">
                        <TiSocialInstagram />
                    </a>
                </div></div>
                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover/>              </div>
                    <div className={Style.footer_box_help}>

                        <h3>Help center</h3>
                        <HelpCenter/>
                    </div>
                    <div className={Style.subscribe}>
                    <div className={Style.subscribe_box}>
                        <input type='email' placeholder='Enter Your email *'/>
                        <RiSendPlaneFill className={Style.subscribe_box_send} />

                    </div>
                    <div className={Style.subscribe_box_info}><p>Developed By MK VEERENDRA VAMSHI </p></div>
</div>
            </div>
        </div>
    );
}

export default Footer
