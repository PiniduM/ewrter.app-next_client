import Head from "next/head";

import Layout from "@/common/layouts/EssayWriterLayout";
import Writer from "@/sections/essayWriter/sections/writer/Writer";
import { WriterContextProvider } from "@/sections/essayWriter/sections/writer/WriterContext";

const EssayWriterHomePage = () => {
  return (
    <>
      <Head>
        <title>essay writer | writer</title>
        <meta
          name="description"
          content="Unlock your full potential with eWriter's free AI writer – the ultimate tool for personalized writing. Our AI-powered platform generates high-quality content based on your preferences, helping you achieve your writing goals. Sign up for eWriter today and take your writing to the next level!"
        />
      </Head>
      <Layout>
        <WriterContextProvider>
          <Writer />
        </WriterContextProvider>
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;
