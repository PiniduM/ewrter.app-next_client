import { useContext } from "react";
import Link from "next/link";

import AuthContext from "@/controllers/AuthContext";
import axIService_api from "../../../../service/controllers/axIServerService";

import classes from "./DriveSlot.module.css";

interface IProps {
  slotId: string;
  topic: string | null;
  content: string | null;
  updator: () => void;
}

const DriveSlot = (props: IProps) => {
  const loginToken = useContext(AuthContext).loginToken.get;

  const slotId = props.slotId;
  const topic = props.topic;
  const content = props.content;

  const toggleContent = () => {
    const contentContainer = document.getElementById(
      `contentContainer${slotId}`
    ) ;

    const bar2 = document.getElementById(`a${slotId}`);
    const bar1 = document.getElementById(`b${slotId}`);

    contentContainer?.classList.toggle(classes.active);
    bar1?.classList.toggle(classes.active);
    bar2?.classList.toggle(classes.active);
  };

  const clearContent = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).disabled = true;

    const updateSlots = props.updator;

    const path = `/edrive/clear_slot`;
    axIService_api
      .post(path, {
        loginToken,
        slotId,
      })
      .finally(() => updateSlots());
  };

  return (
    <div className={classes.drive_slot}>
      {topic ? (
        <div className={classes.filled_slot}>
          <div className={classes.slot_info}>
            <h2 className={classes.topic}>{topic}</h2>
            <div className={classes.toggle_btn} onClick={toggleContent}>
              <span
                className={`${classes.bar} ${classes.a}`}
                id={`a${slotId}`}
              />
              <span
                className={`${classes.bar} ${classes.b}`}
                id={`b${slotId}`}
              />
            </div>
          </div>
          <div
            className={classes.content_container}
            id={`contentContainer${slotId}`}
          >
            <div className={classes.writing_container}>{content}</div>
            <div className={classes.content_options}>
              <button
                className={`defaultBtn ${classes.deleteBtn}`}
                onClick={(e) => clearContent(e)}
              >
                Delete
              </button>
              <Link
              href={{
                pathname: "/service/editor",
                query: { writing: JSON.stringify({topic, content}) },
              }}
              as={"/service/editor"}
            >
              <button className={`defaultBtn ${classes.editBtn}`}>Edit</button>
            </Link>
              {/* <Link href="/service/download" state={{ topic, content: writing }}>
                <button className={`defaultBtn ${classes.downloadBtn}`}>
                  Download
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.empty_slot}>
          <h2 className={classes.topic}>Slot is empty</h2>
        </div>
      )}
    </div>
  );
};

export default DriveSlot;
