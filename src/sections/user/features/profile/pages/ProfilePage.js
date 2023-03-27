import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../AuthContext.js";

import Header from "../../../../../components/Headers/Header.js";
import ProfileDisplayer from "../components/ProfileDisplayer.js";
import ProfileEditor from "../components/ProfileEditor.js";
import getProfileData from "../functions/getProfileData.js";

const ProfilePage = () => {
  const navigate = useNavigate();
  const loginToken = useContext(AuthContext).loginToken.get;
  const ProfileCreated = useContext(AuthContext).profileCreated.get;
  
  const [renderingComponent, setRenderingComponent] = useState("displayer");
  const [profileData, setProfileData] = useState({});
  

    useEffect(() => {
      if (!loginToken) navigate("/authentication/login");
      else if(!ProfileCreated) navigate("/user/create_profile")
      else {
        getProfileData(loginToken)
        .then((profileData) => {
          setProfileData(profileData);
        })
        .catch(() => {
          navigate("/unexpected_error");
        });
      }
    }, [navigate, loginToken,ProfileCreated]);
    
  return (
    <div>
      <Header />
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
          loginToken={loginToken}
          updator={setProfileData}
        />
      )}
    </div>
  );
};

export default ProfilePage;
