import Link from "next/link";
import Backdrop from "../../../../../components/BackDrops/Backdrop";
import classes from "./DupGmailPopUp.module.css";

const DupGmailPopUp = (props) => {
  const toggler = props.toggler;

  return (
    <Backdrop>
      <div className={classes.popup}>
        <p className={classes.request}>Already registered</p>
        <div className={classes.action_btn_row}>
          <button
            className={`${classes.btn} ${classes.cancel_btn}`}
            onClick={() => toggler(false)}
          >
            cancel
          </button>
          <Link to="/authentication/login" state={{identifier: props.gmail}}>
            <button className={`${classes.btn} ${classes.login_btn}`}>
              login
            </button>
          </Link>
        </div>
      </div>
    </Backdrop>
  );
};

export default DupGmailPopUp;
