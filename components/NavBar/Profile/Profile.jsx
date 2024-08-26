import React from 'react';
import Style from './Profile.module.css';
import Image from "next/image";
import images from "../../../img";
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownload } from "react-icons/tb";
import { useWalletInfo } from '@web3modal/wagmi/react'

import { useAccount } from 'wagmi'




import { useDisconnect } from 'wagmi';
import Link from "next/link";

const Profile = () => {
  const { disconnect } = useDisconnect();
  const { walletInfo } = useWalletInfo();
  const { address, isConnecting, isDisconnected } = useAccount()



  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image
          src={images.mkvam}
          alt="user profile"
          width={50}
          height={50}
          className={Style.profile_account_img}
        />
        <div className={Style.profile_account_info}>
          <p>Eranna</p>
          <small>{address}</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/author' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: '/author' }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/account' }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/contact" }}>Help</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: "/about-us" }}>About-Us</Link>
            </p>
          </div>
        </div>

        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <button className={Style.mbu} onClick={() => disconnect()}>
                Disconnect
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
