import React from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./Video.module.css";

const Video = () => {
  
    return (
    <div className={Style.Video}>
           <div className={Style.Video_box}>

            <h1>
                <span>
                🎬
                </span>
                The Videos
            </h1>
            <p>Checkout our hottest video. View more Explore more Creae a value  </p>
           <div className={Style.Video_box_frame}>
            <div className={Style.Video_box_frame_left}>
                    <Image className={Style.Video_box_frame_left_img} src={images.nftVideo2} alt="video1" width={1080} height={580} style={{ objectFit: 'cover' }}/>
              
               
            </div>
            <div className={Style.Video_box_frame_right}>
                hey
            </div>
           </div>

           
           </div>
    </div>
    );
};

export default Video;
