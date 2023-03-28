import { MutableRefObject, useRef, useState } from "react";
import { useRouter } from "next/router";

import SaveWindow from "../saver/saveWindow/SaveWindow";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";

import classes from "./Editor.module.css";

interface IProps {
  data: { topic: string; content: string };
}

const Editor = (props: IProps) => {
  const data = props.data;
  const topic = data.topic;
  const content = data.content;

  const topicRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();
  const [displaySaveWindow, setDisplaySaveWindow] = useState(false);

  const handleCancel = async () => {
    router.back();
  };
  const handleSave = () => {
    const topic = topicRef.current?.value;
    const content = contentRef.current?.value;
    if( !topic || !content) return ;
    const writing = { topic, content };
    localStorage.setItem("edit", JSON.stringify(writing));
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
      <input defaultValue={topic} ref={topicRef} className={classes.topic}/>
      {content ? (
        <>
          <textarea defaultValue={content} ref={contentRef} className={classes.writingViewer} />
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
              writing={{ topic: topicRef.current?.value as string, content: contentRef.current?.value as string}}
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
