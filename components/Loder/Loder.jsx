import React from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./Loder.module.css";

const Loder = ({}) => {
  
    return (
    <div className={Style.Loder}>
 <div className={Style.Loder_box}>
 <div className={Style.Loder_box_img}>
 <Image src={images.gitloder} alt='Loding ...'  width={200} height={200}/>
    </div>
 </div>
    </div>
    );
};

export default Loder;
