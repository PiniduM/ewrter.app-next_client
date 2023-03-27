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
          content="Experience the future of academic writing with eWriter - the ultimate AI-powered essay writing tool. Say goodbye to writer's block and hello to high-quality essays on any topic in minutes. Get top grades with our user-friendly, SEO-optimized platform. Try eWriter today and elevate your writing game!"
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
