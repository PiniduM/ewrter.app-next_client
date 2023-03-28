import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import SaveWindow from "@/sections/service/saver/saveWindow/SaveWindow";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";

import classes from "./Displayer.module.css";

interface IProps {
  writing: {
    topic: string;
    content: string | undefined;
  };
}

const Displayer = (props: IProps) => {
  const router = useRouter();

  const [displaySaveWindow, setDisplaySaveWindow] = useState(false);

  const writing = props.writing;
  const topic = writing.topic;
  const content = writing.content;

  const deleteResult = async () => {
    localStorage.removeItem("result");
    router.push("/");
  };

  return (
    <div className={classes.displayer}>
      <h2 className={classes.topic}>{topic}</h2>
      {content ? (
        <>
          <div id="body" className={classes.resultViewer}>
            {content}
          </div>
          <div className={classes.resultOptions}>
            <button
              className={`defaultBtn ${classes.deleteBtn}`}
              onClick={deleteResult}
            >
              Delete
            </button>
            <Link
              href={{
                pathname: "/service/editor",
                query: { writing: JSON.stringify(writing) },
              }}
              as={"/service/editor"}
            >
              <button className={`defaultBtn ${classes.editBtn}`}>Edit</button>
            </Link>
            {/*
            <Link to="/service/download" state={{ topic, content }}>
              <button className={`${classes.actionBtn} ${classes.downloadBtn}`}>
                Download
              </button>
            </Link> v2
      */}
            <button
              className={`defaultBtn ${classes.saveBtn}`}
              // className={`${classes.actionBtn} ${classes.saveBtn}`}
              onClick={() => setDisplaySaveWindow(true)}
            >
              Save
            </button>
          </div>
          {displaySaveWindow && (
            <SaveWindow
              writing={
                writing as {
                  topic: string;
                  content: string; //content must be a string(truthy) to display save option
                }
              }
              toggler={setDisplaySaveWindow}
            />
          )}
        </>
      ) : (
        <div className={classes.loader}>
          <FormSubmitLoader message={"Writing"} />
        </div>
      )}
    </div>
  );
};

export default Displayer;
