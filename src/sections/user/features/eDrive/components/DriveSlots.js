import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DriveSlot from "./DriveSlot.js";

import classes from "./DriveSlots.module.css";
import { AuthContext } from "../../../../../AuthContext.js";
import getSlots from "../functions/getSlots.js";

const DriveSlots = () => {
  const navigate = useNavigate();

  const loginToken = useContext(AuthContext).loginToken.get;
  const [slots, setSlots] = useState();

  const updateSlots = useCallback(() => {
    getSlots(loginToken).then((result) => setSlots(result.data));
  },[loginToken]);

  useEffect(() => {
    updateSlots();
  }, [loginToken, updateSlots ,navigate]);

  if (!slots) return <></>;

  const slotIds = ["slot1", "slot2", "slot3", "slot4", "slot5"];

  return (
    <div className={classes.slotsContainer}>
      {slotIds.map((slotId) => {
        const slot = slots[slotId];
        return (
          <DriveSlot
            topic={slot?.topic || undefined}
            writing={slot?.content || undefined}
            slotId={slotId}
            key={slotId}
            updator={updateSlots}
          />
        );
      })}
    </div>
  );
};

export default DriveSlots;
