import Head from "next/head";

import Layout1HF from "@/common/layouts/Layout1HF";
import PrivecyPolicy from "@/sections/info/privecyPolicy/PrivecyPolicy";

const PrivecyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Revolutionize your writing with eWriter's cutting-edge automated writing tools powered by artificial intelligence. Our Essay Writer tool uses AI to generate high-quality essays in minutes. Unlock your full potential and achieve your writing goals with eWriter. Try it now!"
        />
      </Head>
      <Layout1HF>
        <PrivecyPolicy />
      </Layout1HF>
    </>
  );
};

export default PrivecyPolicyPage;
