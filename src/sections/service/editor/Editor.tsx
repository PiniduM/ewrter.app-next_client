import { useState } from "react";
import classes from "./Editor.module.css";
import SaveWindow from "../saver/saveWindow/SaveWindow.jsx";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface IProps {
  data: { topic: string; content: string };
}

const Editor = (props: IProps) => {
  const data = props.data;
  const topic = data.topic;
  const content = data.content;

  const router = useRouter();
  const [displaySaveWindow, setDisplaySaveWindow] = useState(false);

  const getEditedTopic = () => {
    return document.getElementById("topic")?.innerText as string;
  };
  const getEditedContent = () => {
    return document.getElementById("content")?.innerText as string;
  };

  const handleCancel = async () => {
    router.back();
  };
  const handleSave = () => {
    const topic = getEditedTopic();
    const content = getEditedContent();
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    Cookies.set("edit", JSON.stringify({ topic, content }), { expires });
    setDisplaySaveWindow(true);
  };
  //v2 editor page with nav to writers

  // const navigateToDownload = () => {
  //   const topic = getEditedTopic();
  //   const content = getEditedContent();
  //   const currentEdit = { topic, content };

  //   Cookies.set("edit", JSON.stringify(currentEdit));

  //   navigate("/service/download", { state: currentEdit });
  // }; v2
  //cannot use a LINK to download because in LINK state should be initialized at render
  return (
    <div className={classes.editor}>
      <h2 contentEditable id="topic" className={classes.topic}>
        {topic}
      </h2>
      {content ? (
        <>
          <div contentEditable id="content" className={classes.writingViewer}>
            {content}
          </div>
          <div className={classes.writingOptions}>
            <button
              className={`defaultBtn ${classes.deleteBtn}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className={`defaultBtn ${classes.saveBtn}`}
              onClick={handleSave}
            >
              Save
            </button>
            {/*<button
              className={`${classes.actionBtn} ${classes.downloadBtn}`}
              onClick={navigateToDownload}
            >
              Download
            </button>
           v2*/}
          </div>
          {displaySaveWindow && (
            <SaveWindow
              writing={{ topic: getEditedTopic(), content: getEditedContent() }}
              toggler={setDisplaySaveWindow}
            />
          )}
        </>
      ) : (
        <div className={classes.loader}>
          <FormSubmitLoader message={"Loading ..."} />
        </div>
      )}
    </div>
  );
};

export default Editor;
