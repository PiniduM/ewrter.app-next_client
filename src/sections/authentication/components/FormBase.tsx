import React from "react";

import classes from "./FormBase.module.css";

interface props {
  children: React.ReactNode;
}

const FormBase: React.FC<props> = (props) => {
  return <div className={classes.base}>{props.children}</div>;
};

export default FormBase;
