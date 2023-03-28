import { useRouter } from "next/router.js";
import { useContext, useEffect, useState } from "react";

import AuthContext from "@/controllers/AuthContext";
import ProfileDisplayer from "./components/ProfileDisplayer";
import ProfileEditor from "./components/ProfileEditor";
import getProfileData from "./functions/getProfileData";
import ProfileLoader from "./components/Loader";

interface IProfileData {
  username: string;
  fullName: string;
  age: string;
  gender: string;
  country: string;
  occupation: string;
}

const Profile = () => {
  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get;
  const ProfileCreated = useContext(AuthContext).profileCreated.get;

  const [renderingComponent, setRenderingComponent] = useState("displayer");
  const [profileData, setProfileData] = useState<IProfileData | undefined>(undefined);

  useEffect(() => {
    if (!loginToken) router.push("/authentication/login");
    else if (!ProfileCreated) router.push("/user/create_profile");
    else {
      getProfileData(loginToken)
        .then((profileData) => {
          setProfileData(profileData);
        })
        .catch(() => {
          router.push("/unexpected_error");
        });
    }
  }, [loginToken, ProfileCreated,router]);

  if (!profileData)
    return ( <ProfileLoader />);

  return (
    <div>
      {renderingComponent === "displayer" && (
        <ProfileDisplayer
          profileData={profileData}
          setter={setRenderingComponent}
        />
      )}
      {renderingComponent === "editor" && (
        <ProfileEditor
          profileData={profileData}
          setter={setRenderingComponent}
          loginToken={loginToken as string}
          updator={setProfileData}
        />
      )}
    </div>
  );
};

export default Profile;
