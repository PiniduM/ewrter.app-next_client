import MiniNavBar from "../NavBar/MiniNavBar";
import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "@/base/AuthContext";

import classes from "./MiniHeader.module.css";

const MiniHeader: React.FC = () => {
  const loggedIn = useContext(AuthContext).loginToken.get ? true : false;

  const toggleLinks = () => {
    const profileLinks = document.getElementById("profileLinks");
    profileLinks?.classList.toggle(classes.active);
  };

  return (
    <div className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>
          <img
            src="/assets/eWriterLogo1Black.png"
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
    </div>
  );
};

export default MiniHeader;