import React, { useContext, useEffect ,useState} from 'react';
import { NFTMarketPlaceContext } from "../context/NFTMarketPlace";
import Style from '../styles/Index.module.css';
import { HeroSection, Filter, Service, Title, AudioLive, NFTCard, FollowerTab, Slider, Collection, Category, Subscribe, Brand, Video,Loder } from '@/components/Comindex';
import {getTopCre} from "../TopCreator/TopCreator"
const Home = () => {
    const {fetchNFTs} = useContext(NFTMarketPlaceContext);
    const [nfts,setNfts]= useState([]);
    const [nftsCopy,setNftsCopy] =useState([]);
  
const creators =getTopCre (nfts);


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
        <div className={Style.homePage}>

            <HeroSection />

            <Service />

            <Title heading="Latest Audio Collection" paragraph="Discovered the most featured NFTs." />
            <AudioLive />
            <Title heading="Featured Nft" paragraph="Discovered the most featured NFTs." />
            <Filter />
{nfts.length==0?<Loder /> :            <NFTCard  nftData={nfts}/>
}            
<Title heading="Latest Toppers" paragraph="Find who is the new winner" />
{creators.length ==0 ? <Loder/>:            <FollowerTab TopCre={creators} />
 }

            <Slider />
            <Collection />
            <Title heading="Browse By Category" paragraph="Explore the NFT in most featured" />
            <Category />
            <Subscribe />
            <Brand />
            <Video />
        </div>
    );
};

export default Home;
