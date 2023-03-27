import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../../../AuthContext";

import ComplexityInput from "./ComplexityInput";

import classes from "./EssayTypeInputSub.module.css";
const EssayTypeInputSub = (props) => {
  const type = props.type;
  const loginToken = useContext(AuthContext).loginToken.get;
  const profileCreated = useContext(AuthContext).profileCreated.get;
  if (type === "personalized") {
    if(!loginToken) {
      return (
        <p className={classes.advice_para}>
          Please{" "}
          <Link to="/authentication/login">
            <span className="underline">log in</span>
          </Link>{" "}
          to use this service
        </p>
      );
    }else if (!profileCreated) {
      return (
        <p className={classes.advice_para}>
          you haven't created a profile yet. please{" "}
          <Link to="/user/create_profile">
            <span className="underline">create a profile</span>
          </Link>{" "}
          to use this service
        </p>
      );
    } else {
      return (
        <p className={classes.advice_para}>
          Your essay will be personalized according to your{" "}
          <Link to="/user/profile">
            <span className="underline">profile details</span>
          </Link>
        </p>
      );
    }
  } else {
    return <ComplexityInput />;
  }
};

export default EssayTypeInputSub;
