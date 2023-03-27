import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../AuthContext.js";

import classes from "./SaveWindow.module.css";
import SaveSlotList from "./components/saveSlotsList.js";
import ConfirmationPopUp from "./components/ConfirmationPopUp.js";
import LoginPopUp from "../../../../components/PopUps/LoginPopUp.js";

import selectableSlotClasses from "./components/SelectableSlot.module.css";
import Backdrop from "../../../../components/BackDrops/Backdrop.js";
import save from "./functions/save.js";
import axIService_api from "../../controllers/axIServerService.js";

const SaveWindow = (props) => {
  const handleSave = (e, slotId, writing) => {
    if (!slotId) {
      alert("please select a slot to save your wariting");
      return;
    }
    if (slots[slotId]) {
      setReplaceTry(true);
      return;
    }

    e.target.disabled = true;
    save(loginToken,slotId,writing)
      .catch((err) => console.log(err))
      .finally(() => setDisplaySaveWindow(false));
  };

  const cancel = () => {
    console.log("close");
    setDisplaySaveWindow(false);
  };


  const [replaceTry, setReplaceTry] = useState(false);
  const loginToken = useContext(AuthContext).loginToken.get;
  useEffect(() => {
    if (loginToken) {
      const path = `/edrive/give_saved_writings`
      axIService_api
        .post(path, {
          loginToken,
        })
        .then((result) => setSlots(result.data))
        .catch((err) => console.log(err));
    }
  }, [loginToken]);


  const writing = JSON.stringify(props.writing);
  const setDisplaySaveWindow = props.toggler;
  const [slots, setSlots] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({
    oldSlotId: undefined,
    currentSlotId: undefined,
  });

  if (selectedSlot.oldSlotId) {
    console.log(selectedSlot);
    const previousSlectedSlot = document.getElementById(selectedSlot.oldSlotId);
    previousSlectedSlot.classList.remove(selectableSlotClasses.selected_slot);
  }
  if (selectedSlot.currentSlotId) {
    const currentSlelectedSlot = document.getElementById(
      selectedSlot.currentSlotId
    );
    currentSlelectedSlot.classList.add(selectableSlotClasses.selected_slot);
  }
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
            selectedSlot={selectedSlot.currentSlotId}
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
