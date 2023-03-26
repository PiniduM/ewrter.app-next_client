import MiniNavBar from "../NavBar/MiniNavBar";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "@/controllers/AuthContext";

import classes from "./MiniHeader.module.css";
import eWriterLogo from "@/assets/logos/eWriterLogo.png";
import profileIcon from "@/assets/icons/profileIcon.png";

const MiniHeader: React.FC = () => {
  const loginToken = useContext(AuthContext).loginToken.get;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (loginToken) setLoggedIn(true);
  }, [loginToken]);
  //compulsary see Header.js for more details
  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks?.classList.toggle(classes.active);
  };

  return (
    <div className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <Image
            src={eWriterLogo}
            alt="eWriter logo"
            className={classes.logo}
          />
        </div>
      </Link>
      <div></div>
      <nav>
        <MiniNavBar />
      </nav>
      {loggedIn && (
        <div className={classes.profileIcon} onClick={toggleLinks}>
          {/* <img
            className={classes.profileIconImg}
            src="/resources/accountIcon.png"
            alt="profile"
          /> */}
          <Image
            src={profileIcon}
            alt="profile"
            className={classes.profileIconImg}
          />
          <div id="profileLinks" className={classes.profileLinks}>
            <div className={classes.profileLink}>
              <Link href="/user/profile">Profile</Link>
            </div>
            <div className={classes.profileLink}>
              <Link href="/authentication/logout">Log out</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniHeader;
