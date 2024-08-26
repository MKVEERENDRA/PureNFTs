import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from 'react-icons/bs';
import Style from "./Category.module.css";
import images from '../../img';
import { ST } from 'next/dist/shared/lib/utils';
const Category = ({btnName,handleClick}) => {
    const CategoryArray =[
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

    return (
        <div className={Style.box_category}>    <div className={Style.category}>
        {CategoryArray.map((el,i) =>(
            <div className={Style.category_box} key={i+1}>
                <Image src={el.background} className={Style.category_box_img} alt='BackGroud' width={360} height={150} style={{ objectFit: 'cover' }} />
                <div className={Style.category_box_title} >

                    <span>
                        <BsCircleFill/>
                    </span>
                    <div className={Style.category_box_title_info}>
                        <h4>Entertainment</h4>
                        <small>1995 NFTS</small>
                    </div>
                    </div>
                </div>
        ))}

    </div></div>
 
    );
};

export default Category;
