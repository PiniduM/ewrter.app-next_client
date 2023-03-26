import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import AuthContext from "@/controllers/AuthContext";
import LoginForm from "@/sections/authentication/features/login/LoginForm";
import Layout from "@/common/layouts/EWriterBasic";

const LoginPage = () => {
  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) router.push("/");
  }, [router, loginToken]);

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
