import React, { useState } from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./AuthorProfileCard.module.css";
import { Button } from '@/components/Comindex';
import { MdVerified,MdCloudUpload,MdOutlineReportProblem} from 'react-icons/md';
import {FiCopy} from 'react-icons/fi';
import { useAccount } from 'wagmi';
import { TiSocialFacebook,TiSocialInstagram,TiSocialLinkedin,TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';
const AuthorProfileCard = ({currendAccount}) => {
  const [share,setShare]=useState(false);
  const [report,setReport] =useState(false);

  const copyAddress =() => { 
    const copyText =document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  const openShare =() => {
    if(!share){
        setShare(true);
        setReport(false);
    }
    else{
        setShare(false);
    }
  };
  const openReport =() => {
    if(!report){
        setShare(false);
        setReport(true);
    }
    else{
        setReport(false);
    }
  };
  const { address, isConnecting, isDisconnected } = useAccount()

    return (
    <div className={Style.AuthorProfileCard}>
        <div className={Style.AuthorProfileCard_box}>
<div className={Style.AuthorProfileCard_box_img}>
<Image src={images.nft_image_1} className={Style.AuthorProfileCard_box_img_img}
 alt='NFT Images'
 width={260}
 height={220}/>

</div>
<div className={Style.AuthorProfileCard_box_info}>
    <h2>Mk veerendra {""} <span><MdVerified/></span>{" "}</h2>
<div className={Style.AuthorProfileCard_box_info_address}>
<input type="text" value={address} id="myInput" />
<FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon} />

</div>
<p>
    Jackie Mka Punk #4543 An Og Crypto Collector
</p>
<div className={Style.AuthorProfileCard_box_info_social} >
    <a href="#">
        <TiSocialFacebook/>
    </a>
    <a href="#">
        <TiSocialInstagram/>
    </a>
    <a href="#">
        <TiSocialTwitter/>
    </a>
    <a href="#">
        <TiSocialLinkedin/>
    </a>
</div>
</div>
<div className={Style.AuthorProfileCard_box_share}>
    <Button btnName="Follow" handleClick={() => {}} />
        <MdCloudUpload onClick={() => openShare()} className={Style.AuthorProfileCard_box_share_icon}/>
            {share &&(
                <div className={Style.AuthorProfileCard_box_share_upload}>
                    <p><span>
                        <TiSocialFacebook/> 
                        </span>  {" "} {" "}  Facebook </p>
                        <p><span>
                        <TiSocialLinkedin/> 
                        </span>  {" "} {" "}  Linkedin </p>
                        <p><span>
                        <TiSocialInstagram/> 
                        </span>  {" "} {" "}  Instagram </p>
                        <p><span>
                        <TiSocialYoutube/> 
                        </span>  {" "} {" "}  Youtube </p>
                        <p><span>
                        <TiSocialTwitter/> 
                        </span>  {" "} {" "}  Twitter </p>
                </div>
            ) }
            <BsThreeDots onClick ={()=> openReport() } className={Style.AuthorProfileCard_box_share_icon} />
                {
                    report &&(
                        <p className={Style.AuthorProfileCard_box_share_report}>
                            <span>
                                <MdOutlineReportProblem/>
                            </span> {" "} {" "}
                            Report absue
                        </p>
                    )
                }
</div>
        </div>

    </div>
    );
};

export default AuthorProfileCard;
