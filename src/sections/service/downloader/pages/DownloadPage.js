import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Downloader from "../components/Downloader.js";

const DownloadPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if(!location.state) navigate("/");
},[location.state,navigate])

  return (
    <>
      <Downloader data={location.state}/>
    </>
  );
};

export default DownloadPage;