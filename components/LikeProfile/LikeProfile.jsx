import React from 'react';
import Image from 'next/image';
import Style from "./LikeProfile.module.css";
import images from "../../img";
const LikeProfile = () => {
  const imageArray =[
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
                                              
                                                  }
  ];
    return (
    <div className={Style.like}>
    {imageArray.map((el,i) => (
<div className={Style.like_box} key={i+1}>
<Image src={el.user } width={15} height={26} key={i+1} className={Style.like_box_img}/>
</div>
    ))}
    </div>
    );
};

export default LikeProfile;
