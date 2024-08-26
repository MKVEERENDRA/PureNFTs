import React from 'react';
 import images from '../../img'
 import Image from 'next/image';
import { Button } from '../Comindex';
import Style from "./Brand.module.css";

const Brand = () => {
  
    return (
    <div className={Style.brand}>
  <div className={Style.brand_box}>
  <div className={Style.brand_box_left}>
  <Image src={images.logo} alt='brand' width={100} height={100} />
  <h1>Eran free Crypto</h1>
  <p>Take a look here you can understand how things work .....</p>
  <div className={Style.brand_box_left_btn}>
  <Button btnName="Create" handleClick={() =>{}}/>
  <Button btnName="Discover" handleClick={() =>{}}/>

</div>
    </div>
    <div className={Style.brand_box_right}>
    <Image src={images.eran} alt='Brand logo' width={800} height={600} />
  
    </div>
  </div>
    </div>
    );
};

export default Brand;
