import Link from "next/link";
import React from "react";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.copyright_txt}>2023 &#169; eWriter</p>
      <div></div>
      <Link href="/info/terms_of_service">
        <p className={classes.link}>Terms of Service</p>
      </Link>
      <Link href="/info/privecy_policy">
        <p className={classes.link}>Privecy Policy</p>
      </Link>
      {/* <Link href="/info/contact_us">
        <p className={classes.link}>Contact Us</p>
      </Link> */}
      <Link href="/info/credits">
        <p className={classes.link}>credits</p>
      </Link>
    </div>
  );
};

export default Footer;
