import React, { useState } from 'react';
import Style from './Discover.module.css';
import Link from 'next/link';
const Discover = () => {
  //Discover navigation menu
  const discover =[
    {
        name:"Collection",
        link:"collection"
    },
    {
        name:"Search",
        link:"search"
    },
    {
        name:"Author Profile",
        link:"author"
    },
    {
        name:"NFT Details",
        link:"Nft-details"
    },
    {
        name:"Account Setting",
        link:"account"
    },
      {
        name:"Upload-NFT",
        link:"Upload-NFT"
    },
    {
        name:"Blog",
        link:"blog"
    }
  ]  
  const [discove,setDiscove] =useState(false);

    return (
        <div>
{discover.map((el,i)=>(
    <div key={i+1 } className={Style.discover}>
          <Link href={`/${el.link}`}>{el.name}</Link>

    </div>
))}
        </div>
    );
};

export default Discover;
