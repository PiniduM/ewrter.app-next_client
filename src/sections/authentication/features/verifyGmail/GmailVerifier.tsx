import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import axIServerMain from "../../controllers/axIServerMain";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";

import classes from "./GmailVerifier.module.css";

interface IProps {
  gmail: string;
}

const GmailVerifier = (props: IProps) => {
  const [displayLoader, setDisplayLoader] = useState(false);

  const[gmail,setGmail] = useState("");
  const router = useRouter();

  const [verificationCode, setVerificationCode] = useState("");
  const [displayWarning, setDisplayWarning] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  //const handleResend = () => {}; v2

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    submitBtn.disabled = true;

    const sixDigitRegex = /^\d{6}$/;
    if (!sixDigitRegex.test(verificationCode)) {
      setDisplayWarning(true);
      console.log("otp invalid");
      return;
    }
    setDisplayLoader(true);

    const path = `/auth/verifygmail`;
    const config = {
      headers: { "Content-Legth": "67" },
    };
    axIServerMain
      .post(
        path,
        {
          gmail,
          verificationCode,
        },
        config
      )
      .then(() => {
        Cookies.remove("verifying_gmail");
        router.push({
          pathname: "/authentication/login",
          query: { identifier: gmail, newCommer: true },
        });
      })
      .catch((err) => {
        if (err?.response?.data === "not_matching") {
          setDisplayWarning(true);
        } // inform that verification code is not matching(incorrect)
        else router.push("/unexpected_error");
      })
      .finally(() => {
        setDisplayLoader(false);
        setTimeout(() => {
          submitBtn.disabled = false;
        }, 1000);
      });
  };
  useEffect(() => setGmail(props.gmail),[props]) // to manage the missmatch metween SSR CSR

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Verify your gmail address</h1>
      <p className={classes.instruction}>
        A six digit verification code has sent to&nbsp;
        <span className={classes.gmail}>{gmail}</span>,<br />
        enter that code to verify your gmail address
      </p>
      {/* implement the splitted otp input when completed v2*/}
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          maxLength={6}
          value={verificationCode}
          placeholder="code"
          className={classes.otpInput}
          onChange={(e) => handleChange(e)}
        />
        {displayWarning ? (
          <p className={classes.warning}>Invalid verification code</p>
        ) : (
          <p className={classes.noWarning}>valid verification code</p>
        )}
        <button className={classes.verifyButton} id="submitBtn">
          Verify
        </button>
        {/* <p className={classes.resendLink} onClick={handleResend}>
          Resend a verification code
        </p>  v2*/}
      </form>
      {displayLoader && <FormSubmitLoader message="Verifying..." />}
    </div>
  );
};

export default GmailVerifier;
