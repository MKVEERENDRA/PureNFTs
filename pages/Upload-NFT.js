import React, { useContext } from 'react';
import Image from 'next/image';
import images from '../img';
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';
import Style from "../styles/upload.module.css";
import { UploadNFT } from '@/UploadNFT/UploadIndex';
const Upload = ({btnName,handleClick,icon,classStyle}) => {
  const {uploadToIPFS,createNft} =useContext(NFTMarketPlaceContext);
    return (
    <div className={Style.uploadNFT}>
       <div className={Style.uploadNFT_box}>
       <div className={Style.uploadNFT_box_heading}>
       <h1>Create New NFT</h1>
       <p>
        You can set preferred display name,create your project and profile settings.
       </p>
    </div>
    <div className={Style.uploadNFT_box_title}>
        <h3>Choose Your NFT Type</h3>
        <p>
            Choose from a wide range of NFTs, including collectibles, art, and games. JPG, PDF, and other any combination of these will be automatically selected.
        </p>
    </div>
    <div className={Style.uploadNFT_box_form}>
        <UploadNFT 
        uploadToIPFS={uploadToIPFS}
        createNft={createNft}
        
        />        

       

    </div>
       </div>
    </div>
    );
};

export default Upload;
