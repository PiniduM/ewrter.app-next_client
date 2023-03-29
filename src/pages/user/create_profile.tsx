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
          content="Take your writing to the next level with eWriter's AI-powered automated writing tools. Sign up now to create a personalized profile and access custom writing content tailored to your preferences. Experience the power of artificial intelligence in writing and elevate your writing game with eWriter!"
        />
      </Head>
      <Layout2Mh>
        <ProfileCreator />
      </Layout2Mh>
    </>
  );
};

export default CreateProfilePage;
