// import axios from "axios";
// import { useState } from "react";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../../../../../AuthContext";

import SelectableSlot from "./SelectableSlot";

import classes from "./SaveSlotsList.module.css";


interface ISelectableSlot {
  oldSlotId: string | undefined;
  currentSlotId: string | undefined;
}

interface IProps {
  slots: Record<string, Record<string, unknown> | null> | null;
  selectedSlotSetter: React.Dispatch<React.SetStateAction<ISelectableSlot>>;
}

const SaveSlotList = (props: IProps) => {

  const slots = props.slots;
  const setSelectedSlot = props.selectedSlotSetter;

  return (
    <div className={classes.save_slots_list}>
      <SelectableSlot
        slotId="slot1"
        content={slots?.slot1?.topic as string || "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot2"
        content={slots?.slot2?.topic as string || "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot3"
        content={slots?.slot3?.topic as string || "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot4"
        content={slots?.slot4?.topic as string || "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot5"
        content={slots?.slot5?.topic as string || "empty"}
        setter={setSelectedSlot}
      />
    </div>
  );
};

export default SaveSlotList;
