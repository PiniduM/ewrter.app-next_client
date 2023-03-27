import axIService_api from "../../../controllers/axIServerService";

const save = async (loginToken, slotId, writing) => {
  const path = `/edrive/save_writing`;
  await axIService_api
    .post(path, {
      loginToken,
      slotId,
      writing,
    })
    .catch((err) => {
      throw err;
    });
};

export default save;
