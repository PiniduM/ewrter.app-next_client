import Head from "next/head";

import Layout from "@/common/layouts/Layout2Mh";
import EssayWriterHome from "@/sections/essayWriter/sections/home/EssayWriterHome";

const EssayWriterHomePage = () => {
  return (
    <>
      <Head>
        <title>essay writer</title>
        <meta
          name="description"
          content="Experience the future of academic writing with eWriter's AI-powered essay writing tool. Say hello to high-quality essays on any topic. Learn how to write high quality essays. Get top grades with our user-friendly, SEO-optimized platform. Try essay writer today!"
        />
      </Head>
      <Layout>
        <EssayWriterHome />
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;
