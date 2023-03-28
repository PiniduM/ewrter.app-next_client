import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

import Editor from "@/sections/service/editor/Editor";
import Layout2Mh from "@/common/layouts/Layout2Mh";

const EditorPage = () => {
  const router = useRouter();

  const [currentEdit, setCurrentEdit] = useState<
     {
        topic: string;
        content: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    const newEdit = router.query.writing as string;
    if (newEdit) {
      setCurrentEdit(JSON.parse(newEdit));
      localStorage.setItem("edit" , newEdit);
      window.history.replaceState({}, document.title);
      return;
    }
    const oldEdit = localStorage.getItem("edit");
    if (oldEdit) {
      setCurrentEdit(JSON.parse(oldEdit));
      return;
    }
    console.log(router.query);
    router.push("/")

  }, [router]);
  return (
    <>
          <Head>
        <title>essay writer | editor</title>
        <meta
          name="description"
          content="Edit your AI-generated content with ease using eWriter's editor. Our automated writing tools generate personalized content based on your preferences, and our editor helps you fine-tune the results for maximum impact. With eWriter, you can create high-quality content in minutes. Try our editor page today!"
        />
      </Head>
    <Layout2Mh>
      {currentEdit && <Editor data={currentEdit} />}
    </Layout2Mh>
    </>
  )
};

export default EditorPage;
