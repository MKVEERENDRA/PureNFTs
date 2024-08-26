import React, { useState } from 'react';
import Image from 'next/image';
import images from '../../img';
import Style from "./AuthorTaps.module.css";
import { TiArrowSortedDown,TiArrowSortedUp,TiTick } from 'react-icons/ti';

const AuthorTaps = ({setCollectiables,setCreated,setLike,setFollower,setFollowing}) => {
  const [openList,setOpenList] =useState(false);
  const [activeBtn,setActiveBtn]=useState(1);
  const [selectedMenu,setSelectedMenu] = useState("Most recent");
  
  const listArray=[
    "Created By Admin",
    "Most popular",
    "Top liked",
    "Top rated",
    "Top commented",

  ];
  const openDropDown =()=>{
    if(!openList){
        setOpenList(true);
    }
    else{
        setOpenList(false);
    }
  }
  const openTab =(e)=>{
    const btnText =e.target.innerText;
    console.log(btnText);
    if(btnText=="Listed Nfts"){

        setCollectiables(true);
        setCreated(false);
        setLike(false);
        setFollower(false);
        setFollowing(false);
        setActiveBtn(1);
    }
    else if(btnText=="Created Nfts"){
        setCollectiables(false);
        setCreated(true);
        setLike(false);
        setFollower(false);
        setFollowing(false);
        setActiveBtn(2);    }
        else if(btnText=="Liked"){
            setCollectiables(false);
            setCreated(false);
            setLike(true);
            setFollower(false);
            setFollowing(false);
            setActiveBtn(3);    }
  
  else if(btnText=="Following"){
    setCollectiables(false);
    setCreated(false);
    setLike(false);
    setFollower(false);
    setFollowing(true);
    setActiveBtn(4);    }

    else if(btnText=="Followers"){
        setCollectiables(false);
        setCreated(false);
        setLike(false);
        setFollower(true);
        setFollowing(false);
        setActiveBtn(5);    }
}

  
    return (
    <div className={Style.AutherTaps}>
         <div className={Style.AutherTaps_box}>
         <div className={Style.AutherTaps_left}>
         <div className={Style.AutherTaps_box_left_btn}>
            <button className={`${activeBtn == 1 ? Style.active:"" }`} onClick={(e)=>openTab(e)} >Listed Nfts</button>
            <button className={`${activeBtn == 2 ? Style.active:"" }`} onClick={(e)=>openTab(e)} >Created Nfts</button>
            <button className={`${activeBtn == 3 ? Style.active:"" }`} onClick={(e)=>openTab(e)} >Liked</button>
            <button className={`${activeBtn == 4 ? Style.active:"" }`} onClick={(e)=>openTab(e)} >Following</button>
            <button className={`${activeBtn == 5 ? Style.active:"" }`} onClick={(e)=>openTab(e)} >Followers</button>

    </div>
    </div>
    <div className={Style.AutherTaps_box_right}>
    <div className={Style.AutherTaps_box_right_para} onClick={()=>openDropDown()}>
        <p>{selectedMenu}</p>
        {openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        
        
        </div>
        {openList &&(
            <div className={Style.AutherTaps_right_list}>
                {listArray.map((el,i)=>(
                    <div key={i+1} onClick={()=>setSelectedMenu(el) } className={Style.AutherTaps_right_list_items}>
                        <p>{el}</p>
                        <span> {selectedMenu ==el && <TiTick/> } </span>
                    </div>
                ))}
            </div>
        )}
    </div>
       </div>
    </div>
    );
};

export default AuthorTaps;
