import React from "react";
import classes from "./FormSubmitLoader.module.css"

interface props {
  message: string
}

const FormSubmitLoader: React.FC<props> = (props) => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
        <div className={classes.bar4}></div>
        <div className={classes.bar5}></div>
      </div>
      <p className={classes.loadingPara}>{props.message}</p>
    </div>
  );
};


export default FormSubmitLoader;