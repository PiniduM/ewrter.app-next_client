import React from "react";
import classes from "./Backdrop.module.css"

interface IProps {
    children: React.ReactNode
}

const Backdrop = (props: IProps) => {
    return (
        <div className={classes.backdrop} >
            {props.children}
        </div>
    )
}

export default Backdrop;
//do not wrok with content need to be scrolled since position fixed