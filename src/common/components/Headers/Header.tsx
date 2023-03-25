import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import AuthContext from "@/base/AuthContext";

import NavBar from "../NavBar/NavBar";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  const loggedIn = useContext(AuthContext).loginToken.get ? true : false;

  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks?.classList.toggle(classes.active);
  };

  return (
    <div className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <Image src="/assets/logos/eWriterLogo.png" alt="eWriter logo" width={150} height={150} className={classes.logo}/>
        </div>
      </Link>
      <div className={classes.topic}>
        <h1 className={classes.companyName}>e Writer</h1>
        <p className={classes.slogon}>Writing made easy</p>
      </div>
      {loggedIn && (
        <div className={classes.profileIcon} onClick={toggleLinks}>
          <img
            className={classes.profileIconImg}
            src="/resources/accountIcon.png"
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
        <NavBar/>
      </nav>
    </div>
  );
};

export default Header;
