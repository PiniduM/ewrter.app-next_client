import Link from "next/link";
import classes from "./UnknownErrorPopUp.module.css";

interface IProps {
  toggler : (arg0: boolean) => void
}

const UnknownErrorPopUp = (props: IProps) => {
  const setErrorPopUp = props.toggler;

  return (
    <div className={classes.login_popup}>
      <p className={classes.request}>Unknown error occured</p>
      <div className={classes.action_btn_row}>
        <Link href="/">
        <button className={`${classes.btn} ${classes.cancel_btn}`}>Cancel</button>
        </Link>
          <button className={`${classes.btn} ${classes.try_again_btn}`} onClick={() => setErrorPopUp(false)} >Try again</button>
      </div>
    </div>
  );
};

export default UnknownErrorPopUp;
