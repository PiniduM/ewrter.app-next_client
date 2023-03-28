import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import AuthContext from "@/controllers/AuthContext";
import ProfileCreator from "@/sections/user/features/profile/components/ProfileCreator";
import Layout2Mh from "@/common/layouts/Layout2Mh";

const CreateProfilePage = () => {
  const router = useRouter();

  const loginToken = useContext(AuthContext).loginToken.get;
  const profileCreated = useContext(AuthContext).profileCreated.get;

  useEffect(() => {
    if (!loginToken) router.push("/authentication/login");
    else if (profileCreated) router.push("/user/profile");
  }, [router, loginToken, profileCreated]);

  return (
    <>
      <Head>
        <title>essay writer | create profile</title>
        <meta
          name="description"
          content="Transform your writing process with eWriter's create_profile page. Our AI-powered platform generates high-quality content based on your personalized preferences. Sign up today, create your profile, and experience the power of automated writing tools for yourself."
        />
      </Head>
      <Layout2Mh>
        <ProfileCreator />
      </Layout2Mh>
    </>
  );
};

export default CreateProfilePage;
