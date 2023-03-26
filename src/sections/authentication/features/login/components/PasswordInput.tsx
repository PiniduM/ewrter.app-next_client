import React, { useState } from "react";
import classes from "./PasswordInput.module.css";


interface IProps {validator : (arg0 : string) => boolean}

const PasswordInput: React.FC<IProps> = (props) => {
  const validatePassword = props.validator;
  const handleValidity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validatePassword(e.target.value)) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const [valid, setValidity] = useState<undefined | boolean> (undefined);
  return (
    <div
    className={`${classes.inputBlock} ${
      valid ? classes.validPwd : classes.inValidPwd
    }`}
  >
    <label
      htmlFor="pwd"
      className={`${classes.pwdInputLable} ${classes.inputLable}`}
    >
      Password :
    </label>
    <input
      type="password"
      name="password"
      autoComplete="on" //reacts request
      onBlur={(e) => handleValidity(e)}
      className={`${classes.pwdInput} ${classes.txtInput}`}
    />
    {valid === false && (
      <p className={classes.invalid_warning}>password invalid !</p>
    )}
  </div>
  );
};

export default PasswordInput;