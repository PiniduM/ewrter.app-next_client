import React, { useContext } from "react";
import AuthContext from "@/controllers/AuthContext";

import Link from "next/link";
import Hamburger from "./Hamburger";

import classes from "./NavBar.module.css";

const NavBar: React.FC = () => {
  let loggedIn = useContext(AuthContext).loginToken.get;

  return (
    <div className={classes.navBar}>
      <Hamburger />
      <ul id="navMenu" className={classes.navList}>
        <Link href="/">
          <li className={classes.navItem}>Home</li>
        </Link>
        <Link href="/essay_writer">
          <li className={classes.navItem}>essay&nbsp;writer</li>
        </Link>
        {/* <NavLink href="/info/about_us">
          <li className={classes.navItem}>About&nbsp;us</li>
        </NavLink> */}
        <Link href="/info/contact_us">
          <li className={classes.navItem}>Contact&nbsp;us</li>
        </Link>
        {loggedIn && (
          <Link href="/user/e_drive">
            <li className={classes.navItem}>eDrive</li>
          </Link>
        )}
        {loggedIn && (
          <Link href="/authentication/logout">
            <li className={classes.navItem}>Log&nbsp;out</li>
          </Link>
        )}
        {!loggedIn && (
          <Link href="/authentication/login">
            <li className={classes.navItem}>Login</li>
          </Link>
        )}
        {!loggedIn && (
          <Link href="/authentication/register">
            <li className={classes.navItem}>Register</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
