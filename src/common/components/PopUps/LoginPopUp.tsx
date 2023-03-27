import Link from "next/link";
import classes from "./LoginPopUp.module.css";

interface IProps {
  toggler : (arg0: boolean) => void
}

const LoginPopUp = (props: IProps) => {
  const setLoginWindow = props.toggler;

  return (
    <div className={classes.login_popup}>
      <p className={classes.request}>Login please</p>
      <div className={classes.action_btn_row}>
        <button className={`defaultBtn ${classes.btn}`} onClick={() => setLoginWindow(false)}>cancel</button>
        <Link href="/authentication/login">
          <button className={`defaultBtn ${classes.btn}`}>login</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPopUp;
