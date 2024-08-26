import React from 'react';
import Image from 'next/image';
import images from '../img';
import Style from "../styles/sub.module.css";

const Subscription = () => {
  const SubscriptionArray = [
    {
      plan: 'Starter',
      price: '$12',
      duration: '1 month',
      icon: images.creatorbackground11,
      popular: "",
      service: [
        "Automated Reporting",
        "Faster Processing",
        "Customization",
        "Basic Analytics"
      ],
      features: [
        "Access to limited NFTs",
        "Monthly newsletter",
        "Standard support",
        " Personalized marketplace solutions to match your brand's identity",
        " Chance to win rare NFTs in monthly raffles.",
        "Custom API access integration."
      ]
    },
    {
      plan: 'Pro',
      price: '$35',
      duration: '3 months',
      popular: "Most Popular",
      service: [
        "Automated Reporting",
        "Priority Processing",
        "Customization",
        "24/7 Support"
      ],
      features: [
        "Access to exclusive NFTs",
        "Weekly newsletter",
        "Priority support",
        "Beta features",
        " Get recommendations based on your collection and activity.",
        " Access to NFTs from exclusive collaborations with renowned artists."
      ]
    },
    {
      plan: 'Enterprise',
      price: '$99',
      duration: '1 year',
      icon: images.subscription_year,
      popular: "",
      service: [
        "Automated Reporting",
        "Priority Processing",
        "Full Customization",
        "Dedicated Support"
      ],
      features: [
        "Unlimited NFT access",
        "Daily newsletter",
        "Dedicated account manager",
        "Custom solutions",
        " Personalized marketplace solutions to match your brand's identity",
        " Get recommendations based on your collection and activity."
      ]
    }
  ];

  return (
    <div className={Style.Subscription}>
                <h1> Make a Subscription Here</h1>

      <div className={Style.Subscription_box}>
        {SubscriptionArray.map((sub, index) => (
          <div key={index} className={`${Style.Subscription_plan} ${sub.popular ? Style.popular : ''}`}>
            <div className={Style.plan_header}>
              {sub.popular && <span className={Style.popular_tag}>{sub.popular}</span>}
              <h2>{sub.plan}</h2>
              <p className={Style.price}>{sub.price}</p>
              <p className={Style.duration}>{sub.duration}</p>
            </div>
            <div className={Style.plan_details}>
              <ul className={Style.services}>
                <h3>Included Services:</h3>
                {sub.service.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              <ul className={Style.features}>
                <h3>Additional Features:</h3>
                {sub.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className={Style.subscribe_button}>Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
