import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import AuthContext from "@/controllers/AuthContext";

const LogoutPage = () => {
  const loginToken = useContext(AuthContext).loginToken;
  const profileCreated = useContext(AuthContext).profileCreated;
  const router = useRouter();

  useEffect(() => {
    if (loginToken.get) {
      Cookies.remove("ewriter_login_token",{path: "/"});
      Cookies.remove("profile_created",{path: "/"});
      loginToken.set(undefined);
      profileCreated.set(false);
    }

    router.push("/");
  }, [router,loginToken,profileCreated]);
};

export default LogoutPage;
