import { useContext } from "react";
import { AuthContext } from "../../../../../AuthContext.js";
import save from "../functions/save";
import classes from "./ConfirmationPopUp.module.css";
const ConfirmationPopUp = (props) => {
  const loginToken = useContext(AuthContext).loginToken.get;
  const selectedSlot = props.selectedSlot;
  const writing = props.writing;
  const setReplaceTry = props.toggler;
  const setDisplaySaveWindow = props.saveWindowToggler;

  const handleConfirm = (e) => {
    e.target.disabled = true;
    save(loginToken, selectedSlot, writing)
    .catch((err) => console.log(err))
    .finally(() => setDisplaySaveWindow(false));
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.confirmation_window}>
        <p className={classes.replace_warning}>
          Are you sure that you want to replace current content in {selectedSlot} with new content
        </p>
        <div className={classes.action_btn_row}>
          <button
            className={`defaultBtn ${classes.btn}`}
            onClick={() => setReplaceTry(false)}
          >
            cancel
          </button>
          <button
            className={`defaultBtn ${classes.btn}`}
            onClick={(e) => handleConfirm(e)}
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
