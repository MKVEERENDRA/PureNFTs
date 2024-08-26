import React, { useContext, useState,useEffect} from "react";
import Style from "../styles/resell.module.css";
import formStyle from "../AccountPage/Form/form.module.css";
import { NFTMarketPlaceContext } from "@/context/NFTMarketPlace";
import { Button } from "@/components/Comindex";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
const resellToken =() =>{
const {createSale} =useContext(NFTMarketPlaceContext);
const [price,setPrice] =useState("");
const [image,setimage] =useState('');
const router = useRouter();
const {id,tokenURI} =router.query;
const fetchNFT =async()=>{
  if(!tokenURI) return ;
  const {data} = await axios.get(tokenURI);
  setimage(data.image);
  setPrice(data.price);
};

useEffect(()=>{
  fetchNFT();
},[id]);
const resell = async()=>{
  try{
    await createSale(tokenURI,price,true,id);
    router.push("/author");
  }
  catch(error){
    console.error(error);
  }

  


};


    return <div className={Style.resell}> 
      <div className={Style.resell_box}> 
        <h1>Resell Your Owned Token and set The Price</h1>
      <div className={formStyle.Form_box_input} >
            <label htmlFor="name">
                Price
            </label>
            <div className={formStyle.Form_box_input_box} >
                <div className={formStyle.Form_box_input_box_icon_u} >
                </div>
                <input type="number" min={0.001} id="name" name="name" required  placeholder='reSellToken' onChange={(e)=> setPrice(e.target.value) }  className={formStyle.Form_box_input_userName}/>



            </div>
            <div className={Style.resell_box_image} >
              {
                image && (<Image src={image} alt ="resell nft" width={400} height={400}/>
             ) }
            </div>
            <div className={Style.resell_box_btn}>
              <Button btnName="Resell NFT" handleClick={()=> resell()} />

            </div>
            
        </div>
      </div>
        </div>
        
    };
        
export default resellToken;