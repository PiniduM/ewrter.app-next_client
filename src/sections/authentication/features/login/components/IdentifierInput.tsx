import React, { useState } from "react";
import classes from "./IdentifierInput.module.css";


interface IProps {validator : (arg0 : string) => boolean}

const IdentifierInput: React.FC<IProps> = (props) => {
    const valildateIdentifier = props.validator;
  const handleValidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (valildateIdentifier(e.target.value)) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const [valid, setValidity] = useState<undefined | boolean>(undefined);
  return (
    <div
      className={`${classes.inputBlock} ${
        valid ? classes.validIdentifier : classes.inValidIdentifier
      }`}
    >
      <label htmlFor="Identifire" className={`${classes.inputLable}`}>
        Username or Gmail :
      </label>
      <input
        id="identifierInput"
        type="text"
        name="identifier"
        onBlur={(e) => handleValidity(e)}
        // if changes to onBlur use(uncomment) activeElement.Blur mechanism codede in login form vise versa if cahged to onChange
        className={`${classes.identifierInput} ${classes.txtInput}`}
      />
      {valid === false && (
        <p className={classes.invalid_warning}>username or gmail invalid !</p>
      )}
    </div>
  );
};

export default IdentifierInput;