import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../AuthContext.js";
import EDrive from "../components/EDrive.js";
import MiniHeader from "../../../../../components/Headers/MiniHeader.js"

const EDrivePage = () => {
  const loginToken = useContext(AuthContext).loginToken.get;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginToken) navigate("/login");
  }, [navigate, loginToken]);

  return (
    <>
      <MiniHeader />
      <EDrive />
    </>
  );
};

export default EDrivePage;
