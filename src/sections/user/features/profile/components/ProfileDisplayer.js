import { Link } from "react-router-dom";
import classes from "./ProfileDisplayer.module.css";

const ProfileDisplayer = (props) => {
  const profileData = props.profileData;

  const setRenderingComponent = props.setter;
  const displayEditor = () =>{
    setRenderingComponent("editor");
  }

  return (
    <div className={classes.displayer}>
      <img src="/assets/profileIcon.png" alt="profile icon" className={classes.profileIcon} />
      <h1 className={classes.topic}>{profileData.username}</h1>
      <ul className={classes.detailContainer}>
        <li className={classes.detail}>Full Name: {profileData.fullName}</li>
        <li className={classes.detail}>Age: {profileData.age}</li>
        <li className={classes.detail}>Gender: {profileData.gender}</li>
        <li className={classes.detail}>Country: {profileData.country}</li>
        <li className={classes.detail}>You are a: {profileData.occupation}</li>
      </ul>
      <div className={classes.actionBtns}>
        {/* <Link to="/logout">
          <button className={`defaultBtn ${classes.logoutBtn}`}>Log out</button>
        </Link> */}
        <button className={`defaultBtn ${classes.editBtn}`} onClick={displayEditor}>Edit</button>
        <Link to="/">
          <button className={`defaultBtn ${classes.closeBtn}`}>Close</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDisplayer;
