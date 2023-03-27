import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/controllers/AuthContext";

import classes from "./SaveWindow.module.css";
import SaveSlotList from "./components/saveSlotsList";
import ConfirmationPopUp from "./components/ConfirmationPopUp";
import LoginPopUp from "@/common/components/PopUps/LoginPopUp";

import selectableSlotClasses from "./components/SelectableSlot.module.css";
import Backdrop from "@/common/components/BackDrops/Backdrop";
import save from "./functions/save";
import axIService_api from "../../controllers/axIServerService";

interface IWriting {
  topic: string;
  content: string;
}

interface IProps {
  writing: IWriting;
  toggler: (arg0: boolean) => void;
}

interface ISelectableSlot {
  oldSlotId: string | undefined;
  currentSlotId: string | undefined;
}

const SaveWindow = (props: IProps) => {
  const handleSave = (
    e: React.MouseEvent<HTMLButtonElement>,
    slotId: string | undefined,
    writing: string
  ) => {
    if (!slotId) {
      alert("please select a slot to save your wariting");
      return;
    }
    if (slots && slots[slotId]) {
      setReplaceTry(true);
      return;
    }

    (e.target as HTMLButtonElement).disabled = true;
    save(loginToken as string, slotId, writing)
      .catch((err) => console.log(err))
      .finally(() => setDisplaySaveWindow(false));
  };

  const cancel = () => {
    console.log("close");
    setDisplaySaveWindow(false);
  };

  const [replaceTry, setReplaceTry] = useState(false);
  const loginToken = useContext(AuthContext).loginToken.get;

  const writing = JSON.stringify(props.writing);
  const setDisplaySaveWindow = props.toggler;
  const [slots, setSlots] = useState<Record<
    string,
    Record<string, unknown> | null
  > | null>(null); // observer db object and define a more specific type
  const [selectedSlot, setSelectedSlot] = useState<ISelectableSlot>({
    oldSlotId: undefined,
    currentSlotId: undefined,
  });

  if (selectedSlot.oldSlotId) {
    console.log(selectedSlot);
    const previousSlectedSlot = document.getElementById(selectedSlot.oldSlotId);
    previousSlectedSlot?.classList.remove(selectableSlotClasses.selected_slot);
  }
  if (selectedSlot.currentSlotId) {
    const currentSlelectedSlot = document.getElementById(
      selectedSlot.currentSlotId
    );
    currentSlelectedSlot?.classList.add(selectableSlotClasses.selected_slot);
  }

  useEffect(() => {
    if (loginToken) {
      const path = `/edrive/give_saved_writings`;
      axIService_api
        .post(path, {
          loginToken,
        })
        .then((result) => setSlots(result.data))
        .catch((err) => console.log(err));
    }
  }, [loginToken]);

  if (!loginToken)
    return (
      <Backdrop>
        <LoginPopUp toggler={setDisplaySaveWindow} />
      </Backdrop>
    );

  return (
    // default backdro does not wrok since content need to be scrolled
    //<div className={classes.backdrop}>
    <Backdrop>
      <div className={classes.save_window}>
        <h2 className={classes.heading}>
          Save to <span className={classes.drive_name}>eDrive</span>
        </h2>
        <h3 className={classes.instruction}>
          please select a slot to save your writing
        </h3>
          <SaveSlotList slots={slots} selectedSlotSetter={setSelectedSlot} />
        <div className={classes.action_btn_row}>
          <button
            className={`defaultBtn ${classes.cancel_btn}`}
            onClick={() => cancel()}
          >
            cancel
          </button>
          <button
            className={`defaultBtn ${classes.save_btn}`}
            onClick={(e) => handleSave(e, selectedSlot.currentSlotId, writing)}
          >
            save
          </button>
        </div>
        {replaceTry && (
          <ConfirmationPopUp
            selectedSlot={selectedSlot.currentSlotId as string}
            writing={writing}
            toggler={setReplaceTry}
            saveWindowToggler={setDisplaySaveWindow}
          />
        )}
      </div>
    </Backdrop>
    //</div>
  );
};

export default SaveWindow;
