import Link from "next/link";
import classes from "./Error500.module.css";

const UnExpectedErrorPage = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1 className={classes.heading}>
          <span className={classes.magnified}>500</span> <br />
          Internal server error
        </h1>
        <p className={classes.description}>We are currently trying to fix the problem.</p>
        <p className={classes.link}>Back to <span className='underline'><Link href="/">homepage</Link></span></p>
      </div>
    </div>
  );
};

export default UnExpectedErrorPage;
