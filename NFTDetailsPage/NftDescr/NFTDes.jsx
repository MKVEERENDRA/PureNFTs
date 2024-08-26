import React, { useContext, useState } from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./NFTDes.module.css";
import { MdVerified,MdCloudUpload,MdTimer,MdReportProblem,MdOutlineDeleteSweep } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { TiSocialFacebook,TiSocialGithub,TiSocialInstagram,TiSocialLinkedin,TiSocialYoutube } from 'react-icons/ti';
import { FaWallet,FaPercentage } from 'react-icons/fa';
import {BiTransferAlt,BiDollar} from 'react-icons/bi';
import { Button } from '@/components/Comindex';
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';
import { NFTTabs } from '../NFTDetailsPageIndex';
import Link from "next/link";
import { useRouter } from 'next/router';
const NFTDes = ({nft}) => {
  const [social,setSocial] =useState(false);
  const [NFTMenu,setNFTMenu] = useState(false);
  const [history,setHistory] = useState(false);
  const [provenance,setProvenance] = useState(false);
  const [owner,setOwner] = useState(false);
  console.log("mkvamshi final",nft);
  const router = useRouter();

  const openSocial = () => {
    if(!social){
      setSocial(true);
      setNFTMenu(false);
  }
  else{
    setSocial(false);
  }}
  const openNFTMenu = () => {
    if(!social){
      setSocial(false);
      setNFTMenu(true);
  }
  else{
    setNFTMenu(false);
  }}
  const openTabs = (e) => {

    const btnText = e.target.innerText;
    if(btnText=="History"){
      setHistory(true);
      setProvenance(false);
      setOwner(false);
    }
    else if(btnText=="Provenance"){
      setProvenance(true);
      setHistory(false);
      setOwner(false);
    }
    else if(btnText=="Owner"){
      setOwner(true);
      setHistory(false);
      setProvenance(false);
    }
  }

  const historyArray=[
    images.user1,images.user2,images.user3,images.user4
  ]
  const provanaceArray=[
    images.user6,images.user7,images.user9,images.user8
  ]
  const OwnerArray=[
    images.user7,images.user9,images.user4,images.user10
  ]
  const openOwner=()=>{
    if(!owner){
      setOwner(true);
      setProvenance(false);
      setHistory(false);
    }
    else{
      setOwner(false);
      setProvenance(false);
      setHistory(false);
    }
  }
  const {buyNFT,currentAccount} =useContext(NFTMarketPlaceContext);
  
    return (
      
        <div className={Style.NFTDes}>
          <div className={Style.NFTDes_box}>
            <div className={Style.NFTDes_box_share}>
              <p>Virtual Worlds</p>
              <div className={Style.NFTDes_box_share_box}>
               <span><MdCloudUpload className={Style.NFTDes_box_share_box_icon} onClick={openSocial} /></span> 
                {social && (
                  <div className={Style.NFTDes_box_share_box_social_a}>
                    <a href="#">
                      <TiSocialFacebook />
                    </a>
                    <a href="#">
                      <TiSocialLinkedin />
                    </a>
                    <a href="#">
                      <TiSocialYoutube />
                    </a>
                    <a href="#">
                      <TiSocialInstagram />
                    </a>
                    <a href="#">
                      <TiSocialGithub />
                    </a>
                  </div>
                )}
    
                <BsThreeDots className={Style.NFTDes_box_share_box_icon} onClick={openNFTMenu} />
                {NFTMenu && (
                  <div className={Style.NFTDes_box_share_box_social}>
                    <a href="">
                      <BiDollar />
                      Change Price
                    </a>
                    <a href="">
                      <BiTransferAlt />
                      Transfer
                    </a>
                    <a href="">
                      <MdReportProblem />
                      Report Abuse
                    </a>
                    <a href="">
                      <MdOutlineDeleteSweep />
                      Delete
                    </a>
                  </div>
                )}
              </div>
            </div>
            <br/> 
          <div className={Style.NFTDes_box_profile_container}>
              <div className={Style.NFTDes_box_profile}>
                <h1>{nft.name}#{nft.tokenId} </h1>
                <div className={Style.NFTDes_box_profile_box}>
                  <div className={Style.NFTDes_box_profile_box_left}>
                    <Image className={Style.NFTDes_box_profile_box_left_img} src={images.user1} alt="profile" width={40} height={40} />
                    <div className={Style.NFTDes_box_profile_box_left_info}>
                      <small>Creator</small> <br />
                      <Link href={{ pathname: "/author", query: { seller: nft.seller } }}>
  
    <span>Vishnu <MdVerified /></span>
  
</Link>                      
                    </div>
                  </div>
                  <div className={Style.NFTDes_box_profile_box_right}>
                    <Image className={Style.NFTDes_box_profile_box_left_img} src={images.user2} alt="profile" width={40} height={40} />
                    <div className={Style.NFTDes_box_profile_box_right_info}>
                      <small>Creator <br /></small>
                      <span>Eranna <MdVerified /></span>
                    </div>
                  </div>
                </div>
                <div className={Style.profileDivider} />
                <div className={Style.NFTDes_box_profile_biding}>
                  <p><MdVerified /><span>Auction ending in:</span></p>
                  <div className={Style.NFTDes_box_profile_biding_box_timmer}>
                    <div className={Style.NFTDes_box_profile_biding_box_timmer_item}>
                      <p>2</p>
                      <span>Days</span>
                    </div>
                    <div className={Style.NFTDes_box_profile_biding_box_timmer_item}>
                      <p>12</p>
                      <span>Hours</span>
                    </div>
                    <div className={Style.NFTDes_box_profile_biding_box_timmer_item}>
                      <p>30</p>
                      <span>Minutes</span>
                    </div>
                    <div className={Style.NFTDes_box_profile_biding_box_timmer_item}>
                      <p>10</p>
                      <span>Seconds</span>
                    </div>
                  </div>
                  <div className={Style.NFTDes_box_profile_biding_box_price}>
                    <div className={Style.NFTDes_box_profile_biding_box_price_bid}>
                      <small>Current Bid</small>
                      <p>{nft.price}ETH <span>(= $3,221.22)</span></p>
                    </div>
                    <div className={Style.NFTDes_box_profile_biding_box_price_span}>                    <span>[{nft.NoOf} {" "}in Stock]</span>
                    </div>
                  </div>
                  <div className={Style.NFTDes_box_profile_biding_box_button}>
  {currentAccount.toLowerCase() === (nft.seller || '').toLowerCase() ? (
    <p>You Cannot Buy Your Own NFT...</p>
  ) : currentAccount.toLowerCase() === (nft.owner || '').toLowerCase() ? (
    <Button icon={<FaWallet />} btnName="List on MarketPlace" handleClick={() =>router.push(`/ResellThisToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`)} classStyle={Style.button} />
  ) : (
    <Button icon={<FaWallet />} btnName="Buy NFT" handleClick={() => buyNFT(nft)} classStyle={Style.button} />
  )}
  <Button icon={<FaPercentage />} btnName="Make an Offer" handleClick={() =>router.push(`/ResellThisToken?id=${nft.tokenId}&tokenURI =${nft.tokenURI}`)}
  classStyle={Style.button} />

                  </div>
                  <div className={Style.NFTDes_box_profile_biding_box_tabs}>
                    <button onClick={(e) => openTabs(e)}>History</button>
                    <button onClick={(e) => openTabs(e)}>Provenance</button>
                    <button onClick={() => openOwner()}>Owner</button>
                  </div>
                  {history && (
                    <div className={Style.NFTDes_box_profile_biding_card}>
                    <p> <NFTTabs dataTab={historyArray} /></p> 
                    </div>
                  )}
                  {provenance && (
                    <div className={Style.NFTDes_box_profile_biding_card}>
                      <NFTTabs dataTab={provanaceArray} />
                    </div>
                  )}
                  {owner && (
                    <div className={Style.NFTDes_box_profile_biding_card}>
                      <NFTTabs dataTab={OwnerArray} icon={<MdVerified />} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default NFTDes;
