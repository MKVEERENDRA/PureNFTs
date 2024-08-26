import React from 'react';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSupport } from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { Button } from '@/components/Comindex';
import FastFacts from '../Fact/Fact';
import images from '../img';
import formStyle from "../AccountPage/Form/form.module.css";
import Style from "../styles/aboutus.module.css";

const aboutus = () => {
    const founderArray = [
        {name: "Veerendravamshi", email: "veerendravamshi@example.com", position: "Co-founder", image: images.mkvam},
        {name: "Veerendravamshi", email: "veerendravamshi@example.com", position: "Co-founder", image: images.mkvam},
        {name: "Veerendravamshi", email: "veerendravamshi@example.com", position: "Co-founder", image: images.mkvam},
        {name: "Veerendravamshi", email: "veerendravamshi@example.com", position: "Co-founder", image: images.mkvam},
    ];

    return (
        <div className={Style.aboutus}>
            <div className={Style.aboutus_box}>
                <div className={Style.aboutus_box_hero}>
                    <div className={Style.aboutus_box_hero_left}>
                        <h1>About Us</h1>
                        <p>Welcome to NFT Marketplace, your premier destination for unique digital assets and collectibles. Our marketplace is a cutting-edge platform designed to bring creators, collectors, and enthusiasts together in a vibrant and dynamic ecosystem. Here’s what sets us apart:</p>
                    </div>
                    <div className={Style.aboutus_box_hero_right}>
                        <Image className={Style.aboutus_box_hero_right_img} src={images.logo} alt="About us" width={600} height={600}/>
                    </div>
                </div>
                <div className={Style.aboutus_box_title}>
                    <h2>About NFT Marketplace</h2>
                    <p>NFT Marketplace is a decentralized, community-driven platform that connects creators, collectors, and enthusiasts. Our mission is to create a global marketplace for unique digital assets and collectibles, fostering a sense of ownership and community among users. By offering a wide range of NFTs, art, and games, we aim to inspire creators, encourage collectors, and promote the appreciation of the art world.</p>
                </div>
                <FastFacts />
                <div className={Style.aboutus_box_founder}>
                    <h2>Meet Our Founders</h2>
                    <div className={Style.aboutus_box_founder_grid}>
                        {founderArray.map((founder, index) => (
                            <div key={index} className={Style.founder_card}>
                                <Image className={Style.founder_image} src={founder.image} alt={founder.name} width={150} height={150} />
                                <h3>{founder.name}</h3>
                                <p>{founder.position}</p>
                                <p><a href={`mailto:${founder.email}`}>{founder.email}</a></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={Style.contact_section}>
                    <h2>Contact Us</h2>
                    <div className={Style.contact_section_grid}>
                        <div className={Style.contact_info}>
                            <div className={Style.contact_item}>
                                <TiSupport /> <h3>Address {" "} </h3>
                                <p>123 Main St, Anytown, USA 
                                    dfdefkjefehf
                                    eefewfe<br></br>
                                </p>
                            </div>
                            <div className={Style.contact_item}>
                                <HiOutlineMail /> <h3>Email</h3>
                                <p><a href="mailto:veerendravamshi@gmail.com">veerendravamshi@gmail.com</a></p>
                            </div>
                            <div className={Style.contact_item}>
                                <h3>Phone No</h3>
                                <p>000-123-456-3546</p>
                            </div>
                            <div className={Style.contact_item_social}>
                                <h3>Social</h3>
                                <a href="#"><TiSocialFacebook /> Facebook</a>
                                <a href="#"><TiSocialLinkedin /> LinkedIn</a>
                                <a href="#"><TiSocialTwitter /> Twitter</a>
                                <a href="#"><TiSocialYoutube /> YouTube</a>
                                <a href="#"><TiSocialInstagram /> Instagram</a>
                            </div>
                        </div>
                        <div className={Style.contact_form}>
                            <form>
                                <div className={formStyle.Form_box_input}>
                                    <label htmlFor="name">Username</label>
                                    <div className={formStyle.Form_box_input_box}>
                                        <div className={formStyle.Form_box_input_box_icon_u}>
                                            <FaUser />
                                        </div>
                                        <input type="text" id="name" name="name" required placeholder='Mk Eranna' className={Style.Form_box_input_userName} />
                                    </div>
                                </div>
                                <div className={formStyle.Form_box_input}>
                                    <label htmlFor="email">Email</label>
                                    <div className={formStyle.Form_box_input_box}>
                                        <div className={formStyle.Form_box_input_box_icon}>
                                            <HiOutlineMail />
                                        </div>
                                        <input type="email" id="email" name="email" required placeholder='mkeranna@gmail.com' className={Style.Form_box_input_userName} />
                                    </div>
                                </div>
                                <div className={formStyle.Form_box_input}>
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" required cols="30" rows='5' placeholder='Intelligence Addict' className={Style.Form_box_input_userName}></textarea>
                                </div>
                                <Button btnName="Send Message" handleClick={() => {}} classStyle={Style.button} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutus;
