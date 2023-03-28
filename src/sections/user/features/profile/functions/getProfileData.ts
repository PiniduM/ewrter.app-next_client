import axIService_api from "../../../../service/controllers/axIServerService";

const getProfileData = async (loginToken: string) => {
  try {
    const path = "/profile/giveprofiledata";
    const result = await axIService_api.post(path, { loginToken });
    const data = result.data;
    const profileData = {
      username: data.username,
      fullName: data.full_name,
      age: data.age,
      gender: data.gender,
      country: data.country,
      occupation: data.occupation,
    };
    return profileData;
  } catch (err) {
    throw err;
  }
};

export default getProfileData;
