import React from "react";
import classes from "./Instruction.module.css";


interface IProps {
  heading : string
  explanation: string
}

const Instruction = (props: IProps) => {
  return (
    <div className={classes.instruction}>
      <h2 className={classes.heading}>{props.heading}</h2>
      <p className={classes.explanation}>{props.explanation}</p>
    </div>
  );
};

export default Instruction;