import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import AuthContext from "@/controllers/AuthContext";
import LoginForm from "@/sections/authentication/features/login/LoginForm";
import Layout from "@/common/layouts/Layout1H";

const LoginPage = () => {
  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) router.push("/");
  }, [router, loginToken]);

  return (
    <>
      <Head>
        <title>essay writer | Login</title>
      </Head>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
};

export default LoginPage;
