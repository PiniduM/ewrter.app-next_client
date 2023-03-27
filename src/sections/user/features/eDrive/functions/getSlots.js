import axIService_api from "../../../../service/controllers/axIServerService";

const getSlots = async (loginToken) => {
  const path = `/edrive/give_saved_writings`;
  try {
    const result = await axIService_api.post(path, { loginToken });
    return result;
  } catch (error) {
    throw error;
  }
};

export default getSlots;
