import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Head from "next/head";

import RegisterForm from "@/sections/authentication/features/register/RegisterForm";
import Layout from "@/common/layouts/Layout1H";
import AuthContext from "@/controllers/AuthContext";

const RegisterPage = () => {

  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get

  useEffect(() => {
    if(loginToken) router.push("/");
  },[router,loginToken])

  return (
    <>
    <Head>
      <title>essay writer | Register</title>
    </Head>
    <Layout>
      <RegisterForm />
    </Layout>
    </>
  );
};

export default RegisterPage;
