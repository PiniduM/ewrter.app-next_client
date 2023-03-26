import RegisterForm from "@/sections/authentication/features/register/RegisterForm";
import Layout from "@/common/layouts/EWriterBasic";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthContext from "@/controllers/AuthContext";

const RegisterPage = () => {

  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get

  useEffect(() => {
    if(loginToken) router.push("/");
  },[router,loginToken])

  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default RegisterPage;
