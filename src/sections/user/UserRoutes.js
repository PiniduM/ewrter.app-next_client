import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ProfilePage = lazy(() => import("./features/profile/pages/ProfilePage.js"));
const CreateProfilePage = lazy(() => import("./features/profile/pages/createProfilePage.js"))
const EDrivePage = lazy(() => import("./features/eDrive/pages/EDrivePage.js"))
const UserRoutes = () => {
  return (
      <Routes>
        <Route path="/profile" exact element={<ProfilePage />}></Route>
        <Route
          path="/create_profile"
          exact
          element={<CreateProfilePage />}
        ></Route>
        <Route path="/e_drive" exact element={<EDrivePage />}></Route>
      </Routes>
  );
};

export default UserRoutes;
