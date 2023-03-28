import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Head from "next/head";

import Layout from "@/common/layouts/Layout1H";
import GmailVerifier from "@/sections/authentication/features/verifyGmail/GmailVerifier";

const VerifyGmailPage = () => {
  const router = useRouter();
  const verifyingGmail =
    (router.query.gmail as string) || Cookies.get("verifying_gmail") || "";

  useEffect(() => {
    if (!verifyingGmail) router.push("/");
  }, [verifyingGmail,router]);

  return (
    <>
    <Head>
      <title>essay writer | verify gmail</title>
    </Head>
    <Layout>
      <GmailVerifier gmail={verifyingGmail} />
    </Layout>
    </>
  );
};

export default VerifyGmailPage;
