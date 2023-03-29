import Head from "next/head";

import Home from "@/sections/home/Home";
import Layout1HF from "@/common/layouts/Layout1HF";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ewriter</title>
        <meta
          name="description"
          content="Revolutionize your writing with eWriter's AI-powered automated writing tools. Generate high-quality essays on with our free AI writer, essay writer.Achieve your writing goals with eWriter, the ultimate tool for personalized writing. Try it now!"
        />
      </Head>
      <Layout1HF>
        <Home />
      </Layout1HF>
    </>
  );
};

export default HomePage;
