import Link from "next/link";
import classes from "./Error400.module.css";

const PageNotFoundError = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h1 className={classes.heading}>
          <span className={classes.magnified}>400</span> <br />
          Page not found
        </h1>
        <p className={classes.link}>Back to <span className='underline'><Link href="/">homepage</Link></span></p>
      </div>
    </div>
  );
};

export default PageNotFoundError;
