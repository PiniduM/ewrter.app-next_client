import Link from "next/link";
import React, { useContext,useEffect,useState } from "react";

import AuthContext from "@/controllers/AuthContext";

import classes from "./MiniNavBar.module.css";

const MiniNavBar: React.FunctionComponent = () => {
  const loginToken = useContext(AuthContext).loginToken.get;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    if (loginToken) setLoggedIn(true);
  }, [loginToken]);
  //important see Header.js for more details

  return (
    <ul id="navMenu" className={classes.navList}>
      <Link className={classes.navLink} href="/">
        <li className={classes.navItem}>Home</li>
      </Link>
      {loggedIn ? (
        <Link className={classes.navLink} href="/user/e_drive">
          <li className={classes.navItem}>eDrive</li>
        </Link>
      ) : (
        <>
          <Link className={classes.navLink} href="/authentication/login">
            <li className={classes.navItem}>Login</li>
          </Link>
          <Link className={classes.navLink} href="/authentication/register">
            <li className={classes.navItem}>Register</li>
          </Link>
        </>
      )}
    </ul>
  );
};

export default MiniNavBar;
