import React from "react";
import Header from "@/common/components/Headers/Header"
import Footer from "@/common/components/Footers/Footer";

import classes from "./Layout1HF.module.css"
interface IProps {
    children: React.ReactNode
}

const Layout1HF = (props: IProps) => {
    return (
        <div className={classes.layout}>
        <Header />
        {props.children}
        <Footer />
        </div>
    )
}

export default Layout1HF;