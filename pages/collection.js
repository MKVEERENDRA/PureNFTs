import React from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/collection.module.css";
import { Collection } from '@/components/Comindex';
import {Slider, Brand } from '@/components/Comindex';
import Filter  from '../components/Filter/Filter';
import {Banner,CollectionProfile,NFTCardTwo} from '../collectionPage/collectionIndex';
const collection = () => {
  const collectionArray = [
  images.nft_image_1, images.nft_image_2,  images.nft_image_2, images.nft_image_3,images.nft_image_1, images.nft_image_2, images.nft_image_3
  ];
    return (
    <div className={Style.collection}>
       <Banner bannerImage ={images.creatorbackground1} />
<CollectionProfile/>
<Filter/>

<NFTCardTwo NFTData={collectionArray}/>
<Slider/>
<Brand/>
    </div>
    );
};

export default collection;
