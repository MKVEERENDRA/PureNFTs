import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import Style from "./AudioCard.module.css";
import images from '../../../img';
import LikeProfile from '../../LikeProfile/LikeProfile';

const AudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);

    const likeNft = () => {
        setLike(!like);
    };

    const playMusic = () => {
        setPlay(!play);
    };

    return (
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box_like_time}>
                <div className={Style.audioCard_box_like} onClick={likeNft}>
                    {like ? <AiFillHeart className={Style.audioCard_box_like_icon} /> : <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />}
                    <span>24</span>
                </div>
                <div className={Style.audioCard_box_time}>
                    <div className={Style.audioCard_box_like_time_remaing}>
                        <small>Remaining Time</small>
                        <h5>3h: 15m : 20s</h5>
                    </div>
                </div>
            </div>
            <div className={Style.audioCard_box_player}>
                <div className={Style.audioCard_box_musicWave}></div>
                <Image 
                    src={images.musiceWave} 
                    alt="music wave" 
                    width={400} 
                    height={100} 
                />
                <div className={Style.audioCard_box_musicPlayer} onClick={playMusic}>
                    {play ? <TbPlayerPause className={Style.audioCard_box_musicPlayer_icon} /> : <TbPlayerPlay className={Style.audioCard_box_musicPlayer_icon} />}
                </div>
            </div>
            <div className={Style.audioCard_box_details}>
                <div className={Style.audioCard_box_details_info}>
                    <h4>Audio Name #1212</h4>
                    <div className={Style.audioCard_box_details_info_price}>
                        <small>Price</small>
                        <p>$3,221</p>
                    </div>
                </div>
                <div className={Style.audioCard_box_details_stock}>
                    <LikeProfile />
                    <h4>100 in stock</h4>
                </div>
            </div>
            <div className={Style.audioCard_box_img}>
                <Image 
                    src={images.creatorbackground10} 
                    alt="Background" 
                    width={560} 
                    height={300} 
                    className={Style.Am} 
                />
            </div>
        </div>
    );
};

export default AudioCard;
