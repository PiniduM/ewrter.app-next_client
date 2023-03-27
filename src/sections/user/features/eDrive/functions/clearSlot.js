import axios from "axios";

const clearSlot = async (slotId, loginToken,navigate) => {
  //can't call useNavigate inside a function

  await axios
    .post("http:/locahost:5002/clear_slot", { loginToken, slot: `slot${slotId}`})
    .finally(() => navigate(0));
};

// not used