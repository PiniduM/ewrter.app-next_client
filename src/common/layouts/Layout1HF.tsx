import React from "react";
import Header from "@/common/components/Headers/Header"
import Footer from "@/common/components/Footers/Footer";
import Script from "next/script";

import classes from "./Layout1HF.module.css"
interface IProps {
    children: React.ReactNode
}

const Layout1HF = (props: IProps) => {
    return (
        <div className={classes.layout}>
                  {/* Global site tag (gtag.js) - Google Analytics*/}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0LMS757CZR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0LMS757CZR');
        `}
      </Script>
        <Header />
        {props.children}
        <Footer />
        </div>
    )
}

export default Layout1HF;