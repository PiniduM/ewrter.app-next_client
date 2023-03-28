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
          content="Experience seamless and secure cloud storage for your writings with eDrive, the integrated solution of eWriter. Sign up for automated syncing and easy access from any device. Say goodbye to lost files and hello to improved productivity with our smart cloud storage for writers!"
        />
      </Head>
      <Layout>
        <EDrive />
      </Layout>
    </>
  );
};

export default EssayWriterHomePage;
