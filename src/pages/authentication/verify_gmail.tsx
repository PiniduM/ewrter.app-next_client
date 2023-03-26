import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Layout from "@/common/layouts/Layout1H";
import GmailVerifier from "@/sections/authentication/features/verifyGmail/GmailVerifier";

const VerifyGmailPage = () => {
  const router = useRouter();
  const verifyingGmail =
    (router.query.gmail as string) || Cookies.get("verifying_gmail") || "";

  useEffect(() => {
    if (!verifyingGmail) router.push("/");
  }, [verifyingGmail]);

  return (
    <Layout>
      <GmailVerifier gmail={verifyingGmail} />
    </Layout>
  );
};

export default VerifyGmailPage;
