import { useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router.js";

import AuthContext from "@/controllers/AuthContext";
import DriveSlot from "./DriveSlot";
import getSlots from "../functions/getSlots";

import classes from "./DriveSlots.module.css";

interface ISlot {
  topic: string;
  content: string;
}

type slotsType = Record<string, ISlot | null> | undefined;

const DriveSlots = () => {
  const router = useRouter();

  const loginToken = useContext(AuthContext).loginToken.get;
  const [slots, setSlots] = useState<slotsType>(undefined);

  const updateSlots = useCallback(() => {
    getSlots(loginToken as string)
      .then((result) => setSlots(result.data))
      .catch(() => router.push("/"));
  }, [loginToken,router]);

  useEffect(() => {
    if (loginToken) updateSlots();
    else router.push("/login");
  }, [updateSlots,loginToken,router]);

  if (!slots) return <></>;

  const slotIds = ["slot1", "slot2", "slot3", "slot4", "slot5"];

  return (
    <div className={classes.slotsContainer}>
      {slotIds.map((slotId) => {
        const slot = slots[slotId];
        return (
          <DriveSlot
            topic={slot?.topic || null}
            content={slot?.content || null}
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
