import React, { useState, useContext } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import Style from './Nabar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from "../Comindex";
import images from '../../img';
import Router from 'next/router';

import { useAccount } from 'wagmi';
import { NFTMarketPlaceContext } from '@/context/NFTMarketPlace';
import ConnectButton from '../ConnectW/ConnectW';

const NavBar = () => {
  const { address, isConnected } = useAccount();
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    setDiscover(btnText === "Discover");
    setHelp(btnText === "Help");
    setNotification(false);
    setProfile(false);
  };

  const openNotification = () => {
    setNotification(!notification);
    setDiscover(false);
    setHelp(false);
    setProfile(false);
  };

  const openProfile = () => {
    setProfile(!profile);
    setNotification(false);
    setDiscover(false);
    setHelp(false);
  };

  const openSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const { currentAccount, connectWallet } = useContext(NFTMarketPlaceContext);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} onClick={()=> Router.push("/")} alt="NFT MARKET PLACE" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type='text' placeholder="Search NFT" />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discovery}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discovery_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>

          {isConnected && (
            <div className={Style.navbar_container_1}>
              <Link href={{ pathname: "Upload-NFT" }}>
                <Button btnName="Create" handleClick={() => { }} />
              </Link>
            </div>
          )}

          <div className={Style.navbar_container_right_button}>
            <ConnectButton />
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profile}>
                <Image src={images.user1} alt="Profile" width={40} height={40} onClick={() => openProfile(4)} className={Style.navbar_container_right_profile} />
                {profile && <Profile />}
              </div>
            </div>
          </div>

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
          </div>
        </div>
      </div>

      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} currentAccount={currentAccount} connectWallet={connectWallet} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
