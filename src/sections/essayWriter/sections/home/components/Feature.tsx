import React from "react";
import Image,{ StaticImageData } from "next/image";

import classes from "./Feature.module.css";

interface IProps {
    icon: StaticImageData
    iconAlt: string
    heading: JSX.Element
    description: JSX.Element
}


const Feature = (props: IProps) => {
    return (
    <div className={classes.featureContainer}>
        <div className={classes.iconContainer}>
            <Image src={props.icon} alt={props.iconAlt} className={classes.icon}/>
        </div>
        <h3 className={classes.h3}>{props.heading}</h3>
        <p className={classes.p}>{props.description}</p>
    </div>
    )
}

export default Feature;