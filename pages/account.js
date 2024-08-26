import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/account.module.css";
import {useDropzone} from 'react-dropzone';
import Form from '../AccountPage/Form/form';


const account = () => {
  const [fileUrl,setFileUrl] =useState(null);
  const onDrop=useCallback(async(acceptedFile)=>{
    setFileUrl(acceptedFile[0]);
  },[]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 500000,
  });
    return (
    <div className={Style.account}>
        <div className={Style.account_info}>
            <h1> 
               Profile Settings
            </h1>
            <p>
                You can set your profile settings here and create a new profile url here.
            </p>

        </div>
        
        <div className={Style.account_box}>
        <div className={Style.account_box_img} {...getRootProps()} >
            <imput {...getRootProps()} />
            <Image src={fileUrl || images.user1} alt="account upload" width={150} height={150} 
            className={Style.account_box_img_img}
            
            />
            <p className={Style.account_box_img_para} >
                Change Image
            </p>
            
            </div>
            <div className={Style.account_box_form} > 
                <Form />
            
        
                
              


                 
            </div>
        </div>



       
    </div>
    );
};

export default account;
