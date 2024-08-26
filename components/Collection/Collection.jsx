import React, {useState,useEffect}from 'react';
import {
    BsFillAlarmFill,BsFillCalendarDateFill,BsCalendar3
} from 'react-icons/bs';
import Style from "./Collection.module.css";
import DaysComponent from "./DayComponent/DayComponent";
import images from "../../img";
const Collection = () => {
  const [popular,setPopular] = useState(true);
  const [following,setFollowing] = useState(false);
  const [news,setNews] = useState(false);
  const CardArray =[
    {
background:images.creatorbackground1,
user:images.user1,

    },
    {
        background:images.creatorbackground2,
        user:images.user2,
        
            },
            {
                background:images.creatorbackground3,
                user:images.user3,
                
                    },
                    {
                        background:images.creatorbackground4,
                        user:images.user4,
                        
                            },
                            {
                                background:images.creatorbackground5,
                                user:images.user5,
                                
                                    },
                                    {
                                        background:images.creatorbackground6,
                                        user:images.user6,
                                        
                                            },
                                            {
                                                background:images.creatorbackground7,
                                                user:images.user7,
                                                
                                                    },
    ];
  const FollowingArray=[
    {
        background:images.creatorbackground3,
        user:images.user3,
        
            },
            {
                background:images.creatorbackground4,
                user:images.user4,
                
                    },
                    {
                        background:images.creatorbackground5,
                        user:images.user5,
                        
                            },
  ];
  const NewsArray =[          {
    background:images.creatorbackground3,
    user:images.user3,
    
        },
        {
            background:images.creatorbackground1,
            user:images.user1,
            
                },
                {
                    background:images.creatorbackground2,
                    user:images.user2,
                    
                        },
                        {
                            background:images.creatorbackground3,
                            user:images.user3,
                            
                                },
                                {
                                    background:images.creatorbackground4,
                                    user:images.user4,
                                    
                                        },
                                        {
                                            background:images.creatorbackground5,
                                            user:images.user5,
                                            
                                                },
        {
            background:images.creatorbackground8,
            user:images.user8,
            
                },
                {
                    background:images.creatorbackground10,
                    user:images.user10,
                    
                        }];
const openPopular=()=>{
    if(!popular){
        setPopular(true);
        setFollowing(false);
        setNews(false);
    }
};
const openFollower=()=>{
    if(!following){
        setPopular(false);
        setFollowing(true);
        setNews(false);
    }
};
const openNews=()=>{
    if(!news){
        setPopular(false);
        setFollowing(false);
        setNews(true);
    }
};
    return (
    <div className={Style.collection}>
        <div className={Style.collection_title}>
            <h2 className={Style.collection_title_h2}>Top List Creator</h2>
        <div className={Style.collection_collection}>
      <div className={Style.collection_collection_btn}>
        <button onClick={() => openPopular()}> 
            <BsFillAlarmFill/><span>Last 24 hours</span></button>
            <button onClick={() => openFollower()}>
            <BsCalendar3/><span>Last 7 Days</span> </button>
            <button onClick={() => openNews()}>
            <BsFillCalendarDateFill/><span>Last 30 Days</span> </button>
      </div>
      </div>

    </div>
    {
        popular &&(
            <div className={Style.collection_box}>
                {CardArray.map((el,i)=>(
                    <DaysComponent key={i +1} el={el} i={i}/>
                ))}
            </div>
        )
    }
    {
        following &&(
            <div className={Style.collection_box}>
                {FollowingArray.map((el,i)=>(
                    <DaysComponent key={i +1} el={el} i={i} />
                ))
    }
</div>
    )}
      {
        news &&(
            <div className={Style.collection_box}>
                {NewsArray.map((el,i)=>(
                    <DaysComponent key={i +1} el={el} i={i}/>
                ))
    }
</div>
    )}
      </div>
    );
};

export default Collection;
