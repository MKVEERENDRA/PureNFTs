import React,{UseState,useEffect,useContext} from "react";
import Image from "next/image";
import { NFTMarketPlaceContext } from "@/context/NFTMarketPlace";
import { images } from "@/next.config";

const Error =() =>{
    const {error, setError} = useContext(NFTMarketPlaceContext);
    useEffect(()=>{
        setError(null);
    }, []);
    return (
        <div className={Style.Error} >
               <div className={Style.Error_box} >
               <div className={Style.Error_box_info} >
                <Image alt="error" width={200} height={200} src={images.download1} />
             <p>Error</p>
               </div>

               </div>
        </div>
    )
 
};

export default Error;