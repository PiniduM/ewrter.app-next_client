import Head from "next/head";

import Layout from "@/common/layouts/Layout2Mh";
import Profile from "@/sections/user/features/profile/Profile";

const EssayWriterHomePage = () => {
  return (
    <>
      <Head>
        <title>essay writer | profile</title>
        <meta
          name="description"
          content="Discover the power of personalized writing with eWriter's AI-powered platform. Edit and optimize your profile data to witness how our platform uses it to create content that's uniquely yours. Sign up for eWriter today and elevate your writing game!"
        />
      </Head>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;