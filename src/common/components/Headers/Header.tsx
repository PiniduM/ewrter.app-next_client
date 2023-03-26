import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/controllers/AuthContext";

import NavBar from "../NavBar/NavBar";

import classes from "./Header.module.css";
import eWriterLogo from "@/assets/logos/eWriterLogo.png";
import profileIcon from "@/assets/icons/profileIcon.png";

const Header: React.FC = () => {
  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks?.classList.toggle(classes.active);
  };

  const loginToken = useContext(AuthContext).loginToken.get;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (loginToken) setLoggedIn(true);
  }, [loginToken]);
  // above techneque is used to prevent missmatch between server side rendered components and their clientside renders
  // reffer https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div
  return (
    <div className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <Image
            src={eWriterLogo}
            alt="logo"
            width={150}
            height={150}
            className={classes.logo}
          />
        </div>
      </Link>
      <div className={classes.topic}>
        <h1 className={classes.companyName}>e Writer</h1>
        <p className={classes.slogon}>Writing made easy</p>
      </div>
      {loggedIn && (
        <div className={classes.profileIcon} onClick={toggleLinks}>
          <Image
            className={classes.profileIconImg}
            src={profileIcon}
            alt="profile"
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
      <nav className={classes.navBar}>
        <NavBar />
      </nav>
    </div>
  );
};

export default Header;
