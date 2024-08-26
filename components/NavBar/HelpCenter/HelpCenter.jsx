import React from 'react';
import Style from './HelpCenter.module.css';
import Link from 'next/link';
const HelpCenter = () => {

  //Discover navigation menu
  const helpcenter =[
    {
        name:"About",
        link:"about-us"
    },
    {
        name:"Contact Us",
        link:"contact"
    },
    {
        name:"Sing Up",
        link:"sing-up"
    },
    {
        name:"Sing In",
        link:"sing-in"
    },
    {
        name:"Subscription",
        link:"subscription"
    }
   
  ]  
    return (
        <div>
{helpcenter.map((el,i)=>(
    <div key={i+1 } className={Style.HelpCenter}>
          <Link href={`/${el.link}`}>{el.name}</Link>

    </div>
))}
        </div>
    );
};

export default HelpCenter;
