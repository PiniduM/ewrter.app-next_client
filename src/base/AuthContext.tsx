import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

interface props {
  children: React.ReactNode;
}

interface ILoginToken {
  get: string | undefined;
  set: (value: string | undefined) => void;
}

interface IProfileCreated {
  get: boolean;
  set: (value: boolean) => void;
}

type AuthContextType = {
  loginToken: ILoginToken;
  profileCreated: IProfileCreated;
};
const AuthContext = createContext<AuthContextType>({
  loginToken: { get: undefined, set: () => {} },
  profileCreated: { get: false, set: () => {} },
});

const AuthContextProvider: React.FunctionComponent<props> = (props: props) => {
  const [loginToken, setLoginToken] = useState(
    Cookies.get("ewriter_login_token")
  );

  const [profileCreated, setProfileCreated] = useState(
    Cookies.get("profile_created") === "T"
  );

  const contextValue = {
    loginToken: { get: loginToken, set: setLoginToken },
    profileCreated: { get: profileCreated, set: setProfileCreated },
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
