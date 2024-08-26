import React, { useContext, useState,useEffect } from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/search.module.css";
import { Slider,Brand,Loder } from '@/components/Comindex';
import {SearchBar} from '../SearchPage/SearchBar/SearchPage';
import { Filter } from '@/components/Comindex';
import { NFTCardTwo,Banner } from '../collectionPage/collectionIndex';
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';
const search = () => {
  const {fetchNFTs} = useContext(NFTMarketPlaceContext);
  const [nfts,setNfts]= useState([]);
  const [nftsCopy,setNftsCopy] =useState([]);

  useEffect(()=>{
    fetchNFTs().then((item)=>{
      setNfts(item.reverse()); // Clone the array before reversing
    setNftsCopy(item);
})  },[]);
const onHandleSearch =(value)=>{
  const filteredNfts = nfts.filter(({name})=>
name.toLowerCase().includes(value.toLowerCase()));
 console.log("filterdata",filteredNfts);
 console.log("revamshui1",nfts);

 if (filteredNfts.length ==0){
  setNfts(nftsCopy);  

}

else
{
  setNfts(filteredNfts);

}
};
console.log("revamshui12",nfts.owner);
console.log("revamshui13",nftsCopy);



 const onClearSearch = () => {
if(nfts.length && nftsCopy.length){
  setNfts(nftsCopy);


};  console.log("revamshui01",nftsCopy);
}  

    return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground1}/>
        <SearchBar onHandleSearch={onHandleSearch}  onClearSearch={onClearSearch} />

        <Filter />
        {nfts.length ==0 ? <Loder/>:<NFTCardTwo NFTData={nfts} />
      }
        <Slider/>
        <Brand/>
        
       
    </div>
    );
};

export default search;
