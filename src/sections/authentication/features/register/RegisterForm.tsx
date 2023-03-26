import React, { useRef, useState } from "react";
import Link from "next/link.js";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import axIServerMain from "../../controllers/axIServerMain";
import FormBase from "../../components/FormBase";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";
import DupGmailPopUp from "./components/DupGmailPopUp";

import classes from "./RegisterForm.module.css";

// break into components and implement onChange if necessary
const RegisterForm = () => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const [duplicateGmail, setDuplicateGmail] = useState(false);
  const [duplicateUsername, setDuplicateUsername] = useState(false);

  const uNameRef = useRef<HTMLInputElement>(null);
  const gmailRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const confirmPwdRef = useRef<HTMLInputElement>(null);

  const [validUname, setValidUname] = useState<undefined | boolean>(undefined);
  const [validgmail, setValidgmail] = useState<undefined | boolean>(undefined);
  const [validPwd, setValidPwd] = useState<undefined | boolean>(undefined);
  const [pwdConfirmed, setPwdConfirmed] = useState<undefined | boolean>(undefined);

  const router = useRouter();

  const validateUsername = (username: string) => {
    const usernameRegex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/;
    return usernameRegex.test(username);
  };
  const validateGmail = (gmail: string) => {
    //const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/i;
    return gmailRegex.test(gmail);
  };
  const validatePassword = (password: string) => {
    const pwdRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,25}$/;
    return pwdRegex.test(password);
  };
  const validateConfirmission = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleUsername = () => {
    if (uNameRef.current !== null && validateUsername(uNameRef.current.value)) {
      setValidUname(true);
    } else {
      setValidUname(false);
    }
  };

  const handlegmail = () => {
    if (gmailRef.current !== null && validateGmail(gmailRef.current.value)) {
      setValidgmail(true);
    } else {
      setValidgmail(false);
    }
  };

  const handlePwd = () => {
    if (pwdRef.current !== null && validatePassword(pwdRef.current.value)) {
      setValidPwd(true);
    } else {
      setValidPwd(false);
    }
    if (pwdConfirmed !== undefined) handleConfirmPwd();
  };

  const handleConfirmPwd = () => {
    if (
      pwdRef.current !== null &&
      confirmPwdRef.current !== null &&
      validateConfirmission(pwdRef.current.value, confirmPwdRef.current.value)
    ) {
      setPwdConfirmed(true);
    } else {
      setPwdConfirmed(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    (document.activeElement as HTMLElement).blur();
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    submitBtn.disabled = true;
    e.preventDefault();
    setDuplicateUsername(false);

    const form = e.target as typeof e.target & {
      gmail: { value: string };
      username: { value: string };
      password: { value: string };
      confirmPassword: { value: string };
    };
    const gmail = form.gmail.value;
    const username = form.username.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (
      !(
        validateUsername(username) &&
        validateGmail(gmail) &&
        validatePassword(password) &&
        validateConfirmission(password, confirmPassword)
      )
    ) {
      submitBtn.disabled = false;
      return;
    }
    setDisplayLoader(true);

    const user = {
      gmail,
      username,
      password,
    };
    const path = `/auth/register`;

    axIServerMain
      .post(path, user)
      .then((result) => {
        if (result.data.gmail) {
          const expires = new Date(Date.now() + 10 * 60 * 1000);
          Cookies.set("verifying_gmail", result.data.gmail, { expires });
          router.push("/authentication/verifygmail");
        } else {
          alert(`Sorry something went wrong please try again,
          contact developers through ewriterinfo@gmail.com if needed`);
        }
      })
      .catch((err) => {
        if (err.response?.data === "duplicate_username") {
          setDuplicateUsername(true);
          //uNameRef.current.focus();
          //setTimeout(() => setDuplicateUsername(false),5000)
        } else if (err.response?.data === "duplicate_gmail") {
          setDuplicateGmail(true);
        } else router.push("/unexpected_error/");
      })
      .finally(() => {
        setDisplayLoader(false);
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      });
  };

  return (
    <FormBase>
      {/* <div className={classes.loadingAnimation}></div>  skipped*/}
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.topic}>Register</h1>
        <div
          className={`${classes.inputBlock} ${
            validUname ? classes.validUname : classes.inValidUname
          }`}
        >
          <label
            htmlFor="username"
            className={`${classes.txtInputLable} ${classes.inputLable}`}
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            required
            ref={uNameRef}
            onBlur={handleUsername}
            className={`${classes.uNameInput} ${classes.txtInput}`}
          />
          {duplicateUsername && (
            <p className={classes.dupUserNameWarning}>Username already taken</p>
          )}
          {validUname === false && (
            <p className={classes.uNameWarning}>
              Please enter a valid username which contains 6-20 characters
              including at least a letter and a number
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${classes.gmailInputBlock} ${
            validgmail ? classes.validgmail : classes.inValidgmail
          }`}
        >
          <label
            htmlFor="gmail"
            className={`${classes.gmailInputLable} ${classes.inputLable}`}
          >
            Gmail:
          </label>
          <input
            type="text"
            name="gmail"
            required
            ref={gmailRef}
            onBlur={handlegmail}
            className={`${classes.gmailInput} ${classes.txtInput}`}
          />
          {validgmail === false && (
            <p className={classes.gmailWarning}>
              Please enter a valid gmail address
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${
            validPwd ? classes.validPwd : classes.inValidPwd
          }`}
        >
          <label
            htmlFor="pwd"
            className={`${classes.pwdInputLable} ${classes.inputLable}`}
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            ref={pwdRef}
            onBlur={handlePwd}
            className={`${classes.pwdInput} ${classes.txtInput}`}
          />
          {validPwd === false && (
            <p className={classes.pwdWarning}>
              Please enter a valid password which contains 6-25 characters
              including at least a letter and a number
            </p>
          )}
        </div>
        <div
          className={`${classes.inputBlock} ${
            pwdConfirmed ? classes.pwdConfirmed : classes.pwdNotConfirmed
          }`}
        >
          <label
            htmlFor="confirmPwd"
            className={`${classes.confirmPwdLable} ${classes.inputLable}`}
          >
            confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            autoComplete="on" // reacts request
            ref={confirmPwdRef}
            onBlur={handleConfirmPwd}
            className={`${classes.confirmPwdInput} ${classes.txtInput}`}
          />
          {pwdConfirmed === false && (
            <p className={classes.confirmPwdWarning}>Passwords do not match!</p>
          )}
        </div>
        <div className={classes.submitRow}>
          <input
            type="submit"
            id="submitBtn"
            value="Register"
            className={classes.submitBtn}
          />
          <p>
            Already have a account?{" "}
            <Link href="/authentication/login">login</Link>
          </p>
        </div>
      </form>
      {displayLoader && <FormSubmitLoader message={"Loading..."} />}
      {duplicateGmail && (
        <DupGmailPopUp
          gmail={gmailRef.current?.value || ""}
          toggler={setDuplicateGmail}
        />
      )}
    </FormBase>
  );
};

export default RegisterForm;
