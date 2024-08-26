import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/author.module.css";
import { Title } from '@/components/Comindex';
import { Banner, NFTCardTwo } from '@/collectionPage/collectionIndex';
import { Discover } from '@/components/NavBar';
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';
import { Brand } from '@/components/Comindex';
import FollowerTabCard from '@/components/FollowerTab/FollwerTabCard/FollowerTabCard';
import { AuthorProfileCard } from "../authorPage/componentIndex";
import { useAccount } from 'wagmi';
import { AuthorTaps, AuthorNftCardBox } from '../authorPage/componentIndex';
import account from './account';

const author = () => {
  const { fetchItemsListed, currentAccount } = useContext(NFTMarketPlaceContext);

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller:"X0005rcfgvgv94847"
,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller:"X0005rcfgvgv94847"
,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller:"X0005rcfgvgv94847"
,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller:"X0005rcfgvgv94847"
,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller:"X0005rcfgvgv94847"
,
    }
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  const [nfts, setNfts] = useState([]);
  const [myNFTS, setMYNFTs] = useState([]);
  const { address, isConnecting, isDisconnected } = useAccount()
  useEffect(() => {
    fetchItemsListed("fetchItemsListed").then((items) => {
      setNfts(items);
      console.log(items);
    });
  }, []); // Empty dependency array ensures this runs only once after the first render

  useEffect(() => {
    fetchItemsListed("fetchMyNFTs").then((items) => {
      setMYNFTs(items);
      console.log(items);
    });
  }, []);

  console.log(nfts);
  console.log("eranna",nfts);
  console.log("erannamu",myNFTS);

  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount={account}/>
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNftCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={myNFTS}

        myNFTS={nfts}
      />
      <Title heading="Popular Creator" paragraph="Click On the Music icon and enjoy NFT music or audio" />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard key={i} i={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default author;
