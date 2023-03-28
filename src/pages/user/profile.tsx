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
          content="Discover the ultimate tool for personalized writing with eWriter's profile page. Edit and optimize your profile data, and witness how our AI-powered platform uses it to create content that's uniquely yours. Sign up now and take your writing to the next level with eWriter's automated writing tools!"
        />
      </Head>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;