import Head from "next/head";

import Layout from "@/common/layouts/Layout2Mh";
import EDrive from "@/sections/user/features/eDrive/components/EDrive";

const EssayWriterHomePage = () => {
  return (
    <>
      <Head>
        <title>essay writer | eDrive</title>
        <meta
          name="description"
          content="Experience seamless and secure cloud storage for your writings with eDrive – the integrated solution of eWriter. Our automated syncing and easy access from any device helps you stay productive and never lose a file. Sign up for eWriter today!"
        />
      </Head>
      <Layout>
        <EDrive />
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;
