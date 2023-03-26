import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import Cookies from "js-cookie";

import axIServerMain from "../../controllers/axIServerMain";
import AuthContext from "@/controllers/AuthContext";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";
import FormBase from "../../components/FormBase";
import IdentifierInput from "./components/IdentifierInput";
import PasswordInput from "./components/PasswordInput";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const router = useRouter();

  const identifierRef = useRef<HTMLInputElement>(null);

  const [displayLoader, setDisplayLoader] = useState(false);
  const [incorrectWarning, setIncorrectWarning] = useState(false);

  const setLoginToken = useContext(AuthContext).loginToken.set;
  const setProfileCreated = useContext(AuthContext).profileCreated.set;

  const data = router.query;
  const identifier = data.identifier;
  const newCommer = data.newCommer;

  const usernameRegex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|googlemail)\.com$/i;
  const pwdRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,25}$/;
  const valildateIdentifier = (identifier: string): boolean => {
    return usernameRegex.test(identifier) || gmailRegex.test(identifier);
  };
  const validatePassword = (password: string): boolean => {
    return pwdRegex.test(password);
  };


  const handleSubmit = async (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //(document.activeElement as HTMLElement)?.blur();
    // use above mechanism if validation is done on blur
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    submitBtn.disabled = true;

    const form = e.target;
    const identifier = form.identifier.value;
    const password = form.password.value;

     if (!(valildateIdentifier(identifier) && validatePassword(password))) {
       submitBtn.disabled = false;
       return;
     }

    setDisplayLoader(true);
    const user = {
      identifier,
      password,
    };
    const path = `/auth/login`;
    axIServerMain
      .post(path, user)
      .then((response) => {
        if (response.data.username) {
          const token = response.data.token;
          const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
          Cookies.set("ewriter_login_token", token, { expires });
          setLoginToken(token);
          if (response.data?.profileCreated === "y") {
            Cookies.set("profile_created", "T", { expires });
            setProfileCreated(true);
          } else if (newCommer) {
            router.push("/user/create_profile");
          }
        } else if (response.data?.gmail) {
          const expires = new Date(Date.now() + 10 * 60 * 1000);
          Cookies.set("verifying_gmail", response.data.gmail, { expires });
          router.push("/authentication/verifygmail");
        } else {
          alert(`something went wrong please try again,
          contact developers through ewriterinfo@gmail.com if needed`);
        }
      })
      .catch((err) => {
        if (err.response?.data === "username_pwd_incorrect") {
          setIncorrectWarning(true);
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
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.topic}>Login</h1>
        <IdentifierInput  validator={valildateIdentifier} ref={identifierRef}/>
        <PasswordInput validator={validatePassword}/>
        {incorrectWarning && (
            <p className={classes.incorrectWarning}>
              Incorrect username or password
            </p>
          )}
        <div className={classes.submitRow}>
          <input
            type="submit"
            id="submitBtn"
            value="Login"
            className={classes.submitBtn}
          />
          <p>
            Don't have an account?{" "}
            <Link href="/authentication/register">
              <span className="underline">Register</span>
            </Link>
          </p>
        </div>
        {displayLoader && <FormSubmitLoader message={"Loading..."} />}
      </form>
    </FormBase>
  );
};

export default LoginForm;
