import classes from "./Credits.module.css";

const CreditsPage = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.heading}>Credits</h1>
      <div className={classes.content}>
        <div className={classes.credit_container}>
          <h2 className={classes.credit_heading}>Developers : </h2>
          <ul className={classes.credit_owners}>
            <li className={classes.credit_owner}>
              <p>R.W.K.Pinidu Maneesha</p>
            </li>
          </ul>
        </div>
        <div className={classes.credit_container}>
          <h2 className={classes.credit_heading}>Resource Providers : </h2>
          <ul className={classes.credit_owners}>
            {/* <li className={classes.credit_owner}>
              <p>
                <a href="https://www.freepik.com/author/benzoix">Dineth</a> on
                Freepik
              </p>
            </li> */}
            <li className={classes.credit_owner}>
              <p>
                <a href="https://www.freepik.com/author/benzoix">benzoix</a> on
                Freepik
              </p>
            </li>
            <li className={classes.credit_owner}>
              <p>
                <a href="https://www.freepik.com/author/cookie-studio">
                  cookie_studio
                </a>{" "}
                on Freepik
              </p>
            </li>
            <li className={classes.credit_owner}>
              <p>
                <a href="https://www.freepik.com/author/freepik">freepik</a> on
                Freepik
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditsPage;
