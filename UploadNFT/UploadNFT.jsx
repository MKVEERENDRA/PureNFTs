import React ,{useState} from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "./UploadNFT.module.css";
import { FaPercent } from 'react-icons/fa';
import { AiTwotonePropertySafety } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import Formstyle from '@/AccountPage/Form/form.module.css';
import { FaUser } from 'react-icons/fa';
import Router, { useRouter } from 'next/router';
import { Button } from '@/components/Comindex';
import { DropZone } from './UploadIndex';
import { MdOutlineAttachFile } from 'react-icons/md';
import { NFTMarketPlaceProvider } from '@/context/NFTMarketPlace'; 

import { MdOutlineHttp } from 'react-icons/md';
import { setPriority } from 'os';
const UploadNFT = ({uploadToIPFS,createNft}) => {
  const [active,setActive] = useState(0);
  const [itemName,setItemName] = useState("");
  const [description,setDescription] = useState("");
  const [website,setWebsite] = useState("");
  const [price,setPrice] = useState("");
  
  
  const [rayalties,setRoyalties] = useState(0);
  const [NoOf,setNoOf] = useState(0);

  const [fileSize,setFileSize] = useState("");
  const [category, setcategory] = useState(0);
  const [properties, setproperties] = useState("");
  const [image, setImage] = useState(null);
  const router =useRouter();

const categoryArry =[
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    {
        image:images.nft_image_1,
        category:"Sports",
    },
    
    {
        image:images.nft_image_2,
        category:"Fucking Art",
    },
    {
        image:images.nft_image_3,
        category:"Nudes",
    },
    {
        image:images.nft_image_3,
        category:"Art",
    }
]
    return (
    <div className={Style.upload}>
        <DropZone title="JPG,PNG,WEBM,MAX 3MB"
        heading="Drag & Drop file"
        subHeading="or Browse Media on your Device"
        itemName={itemName}
        website={website}
        description={description}
        rayalties={rayalties}
        fileSize={fileSize}
        NoOf={NoOf}

        properties={properties}
        category={category}
        uploadToIPFS={uploadToIPFS} // Ensure this prop is passed
        createNft={createNft}
        image={images.upload}
        setImage={setImage}
        onSizeChange={setFileSize} // Ensure this prop is passed correctly

        />
       <div className={Style.upload_box}>
       <div className={Formstyle.Form_box_input} >
            <label htmlFor="nft">
                ItemName
            </label>
            <div className={Formstyle.Form_box_input_box} >
                <div className={Formstyle.Form_box_input_box_icon_u} >
                <FaUser />
                </div>
                <input type="text" id="name" name="name" required  placeholder='Mk Eranna' className={Style.Form_box_input_userName} 
                onChange={(e)=>setItemName(e.target.value)}
                />



            </div>
            
        </div>
        <div className={Formstyle.Form_box_input} > 
            <label htmlFor="website">
                Website
            </label>
            <div className={Formstyle.Form_box_input_box} >
                <div className={Formstyle.Form_box_input_box_icon} >
                    <MdOutlineHttp />
                </div>
                <input type="url" id="website" name="website" required placeholder='https://www.mkeranna.com' className={Formstyle.Form_box_input_website}
                                onChange={(e)=>setWebsite(e.target.value)}

                />
                
            </div>
<p className={Formstyle.upload_box_input_para} >
    Describe your NFT in detail, including a brief overview, rationale for the sale, and any unique features. Your description should be concise, clear, and easy to understand.



</p>Formstyle

       </div>
       <div className={Formstyle.Form_box_input} >
        <label htmlFor="description">
            Description
            </label>
            <textarea id="description" name="description" required cols="30" rows='5' placeholder='Something about you ..' className={Formstyle.Form_box_input_description} 
            onChange={(e)=>setDescription(e.target.value)}
            
            >
                </textarea>
                <p>
                    Describe your NFT in detail, including a brief overview, rationale for the sale, and any unique features. Your description should be concise, clear, and easy to understand.
                </p>


        </div>
        <div className={Formstyle.Form_box_input}>
            <label htmlFor="name">
Choose Collection            </label>
<p className={Style.upload_box_input_para} >
    Choose a collection to associate your NFT with. Your collection should be curated by a trusted community of NFT enthusiasts.
</p>
<div className={Style.upload_box_slider_div} >
    {
        categoryArry.map((el,i) => (
            <div 
                 className={`${Style.upload_box_slider}
            ${
                active === i+1? Style.active:""}`} 
                key={i+1}
                onClick={()=>(setActive(i+1),setcategory(el.category))}
                >
                    <div className= {Style.upload_box_slider_box} >
                        <div className={Style.upload_box_slider_box_img} >
                        <Image src={el.image} alt="Backimage" width={70} height={70} className={Style.upload_box_slider_box_img_img} />

                        </div>
                        <div className={Style.upload_box_slider_box_img_icon} >
                            <TiTick/>
                        </div>


                    </div>
                    <p>  {el.category} NFTs</p>

            </div>
        ))
    }
</div>
          
        </div>
       {/* Price, Royalties, and Properties Fields */}
    <div className={Style.upload_box_inputs_group}>
      <div className={Style.upload_box_inputs_left}>
        <div className={Formstyle.Form_box_input}>
          <label htmlFor="Price">Price</label>
          <div className={Formstyle.Form_box_input_box}>
            <div className={Formstyle.Form_box_input_box_icon}>
              <AiTwotonePropertySafety/>
            </div>
            <input 
              type="url" 
              id="price" 
              name="price" 
              placeholder='Price' 
              className={Style.Form_box_input_facebook}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className={Formstyle.Form_box_input}>
          <label htmlFor="Royalties">Royalties</label>
          <div className={Formstyle.Form_box_input_box}>
            <div className={Formstyle.Form_box_input_box_icon}>
              <FaPercent />
            </div>
            <input 
              type="url" 
              id="royalties" 
              name="royalties" 
              placeholder='20%' 
              className={Formstyle.Form_box_input_instagram}
              onChange={(e) => setRoyalties(e.target.value)}
            />
          </div>
        </div>
        <div className={Formstyle.Form_box_input}>
          <label htmlFor="NoOf">No Of Items</label>
          <div className={Formstyle.Form_box_input_box}>
            <div className={Formstyle.Form_box_input_box_icon}>
              <FaPercent />
            </div>
            <input 
              type="url" 
              id="NOOf" 
              name="NoOf" 
              placeholder='2802' 
              className={Formstyle.Form_box_input_instagram}
              onChange={(e) => setNoOf(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={Style.upload_box_inputs_right}>
        <div className={Formstyle.Form_box_input}>
          <label htmlFor="properties">Properties</label>
          <textarea
            id="properties"
            name="properties"
            cols="30"
            rows='2'
            placeholder='e.g., Rarity, Background Color, Edition'
            className={Formstyle.Form_box_input_description}
            onChange={(e) => setproperties(e.target.value)}
          />
          <p>
            Specify unique traits or characteristics of your NFT, such as rarity, background color, edition number, or other attributes that collectors might value.
          </p>
        </div>
      </div>
    </div>

            <div className={Style.upload_box_btn} >
                <Button btnName="Upload"
                handleClick={async()=>createNft(itemName,price,image,description,website, rayalties, fileSize, category, properties,NoOf)} classStyle={Style.upload_box_btn_style}  
                
               
/>                <Button btnName="Preview" className={Style.upload_box_btn_style} 
                /></div>


                <div className={Style.upload_box_btn_info} >
                    <AiTwotonePropertySafety />
                    <p>
                        By clicking "Upload", you agree to the terms and conditions of the Veerendra NFT Platform.
                    </p>
        

            </div>
        </div>
    </div>
    );
};

export default UploadNFT;
