import React, { useState } from 'react';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import Image from 'next/image';
import images from "../../../img"; 
import Style from "./AudioCardSmall.module.css";
import LikeProfile from '../../LikeProfile/LikeProfile';

const AudioCardSmall = () => {
    const [play, setPlay] = useState(false);
    const playMusic = () => {
        setPlay(!play);
    };

    return (
        <div className={Style.audioPlayer}>
            <div className={Style.audioPlayer_box}>
                <Image 
                    src={images.creatorbackground1} 
                    alt='creator background' 
                    width={100} 
                    height={100} 
                    className={Style.audioPlayer_box_img} 
                />
            </div>
            <div className={Style.audioPlayer_box_info}>
                <h4>NFT Music #112121</h4>
                <div className={Style.audioPlayer_box_info_box}>
                    <LikeProfile />
                    <div className={Style.audioPlayer_box_info_box_price}>
                        <small>Price</small>
                        <p>1.00 ETH</p>
                    </div>
                </div>
            </div>
            <div className={Style.audioPlayer_box_playBtn} onClick={playMusic}>
                {play ? <TbPlayerPause /> : <TbPlayerPlay />}
            </div>
        </div>
    );
};

export default AudioCardSmall;
