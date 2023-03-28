import { useRef, useState } from "react";
import Image from "next/image";
import Select from "react-select";

import {
  genderOptions,
  occupationOptions,
  countryOptions,
} from "../functions/optionLists";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";
import axIService_api from "../../../../service/controllers/axIServerService";

import profileIcon from "@/assets/icons/profileIcon.png"
import classes from "./ProfileEditor.module.css";

interface IProfileData{
  username: string
  fullName: string
  age: string
  gender: string
  country: string
  occupation: string
}

interface IProps {
  loginToken: string;
  profileData: IProfileData
  setter : React.Dispatch<React.SetStateAction<string>>
  updator: React.Dispatch<React.SetStateAction<IProfileData | undefined>>
}

interface INewUpdates {
  fullName?: string
  age?: string
  gender?: string
  country?: string
  occupation?: string
}

const ProfileEditor = (props: IProps) => {
  const [displayLoader, setDisplayLoader] = useState(false);

  const loginToken = props.loginToken;

  const profileData = props.profileData;
  const setProfileData = props.updator;

  const currentFullName = profileData.fullName;
  const currentAge = profileData.age;
  const currentGender = profileData.gender;
  const currentCountry = profileData.country;
  const currentOccupation = profileData.occupation;

  const newFullNameRef = useRef<HTMLInputElement>(null);
  const newAgeRef = useRef<HTMLInputElement>(null);
  const [selectedGender, setSelectedGender] = useState(currentGender);
  const [selectedCountry, setSelectedCountry] = useState(currentCountry);
  const [selectedOccupation, setSelectedOccupation] =
    useState(currentOccupation);

  // const [countriesOptions, setCountriesOptions] = useState([]);

  // useEffect(() => {
  //   getCountriesOptions()
  //     .then((options) => setCountriesOptions(options))
  //     .catch(() => setCountriesOptions([]));
  // }, []);

  const setRenderingComponent = props.setter;


  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
    submitBtn.disabled = true;
    setDisplayLoader(true);

    const newUpdates: INewUpdates = {};

    const newFullName = newFullNameRef.current?.value;
    const newAge = newAgeRef.current?.value;

    if (newFullName !== currentFullName) newUpdates.fullName = newFullName;
    if (newAge !== currentAge) newUpdates.age = newAge;
    if (selectedGender !== currentGender) newUpdates.gender = selectedGender;
    if (selectedCountry !== currentCountry)
      newUpdates.country = selectedCountry;
    if (selectedOccupation !== currentOccupation)
      newUpdates.occupation = selectedOccupation;

    if (Object.entries(newUpdates).length === 0)
      setRenderingComponent("displayer");
    else {
      const path = "/profile/updateprofile";
      axIService_api
        .post(path, {
          newUpdates,
          loginToken,
        })
        .then(() => {
          setProfileData((oldData) => {
            return Object.assign({}, oldData, newUpdates);
          });
        })
        .finally(() => setRenderingComponent("displayer"));
    }
  };

  return (
    <div className={classes.editor}>
      <Image
        src={profileIcon}
        alt="profile icon"
        className={classes.profileIcon}
      />
      <h1 className={classes.topic}>{profileData.username}</h1>
      {/* <h2 className={classes.h2}>Edit profile details</h2> */}
      <form className={classes.editorForm} onSubmit={(e) => handleSubmit(e)}>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Full Name: </label>
          <input
            type="text"
            defaultValue={currentFullName}
            placeholder={currentFullName}
            id=""
            name=""
            required
            ref={newFullNameRef}
            className={classes.txtInput}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Age: </label>
          <input
            type="text"
            defaultValue={currentAge}
            placeholder={currentAge}
            required
            ref={newAgeRef}
            className={classes.txtInput}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Gender: </label>
          <Select
            options={genderOptions}
            defaultValue={{ value: currentGender, label: currentGender }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedGender(choice?.value || "")}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Country: </label>
          <Select
            options={countryOptions}
            defaultValue={{ value: currentCountry, label: currentCountry }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedCountry(choice?.value || "")}
          />
        </div>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>You are a:</label>
          <Select
            options={occupationOptions}
            defaultValue={{
              value: currentOccupation,
              label: currentOccupation,
            }}
            menuPlacement="bottom"
            onChange={(choice) => setSelectedOccupation(choice?.value || "")}
          />
        </div>
        <div className={classes.actionBtns}>
          <button
            type="button"
            className={`defaultBtn ${classes.cancelBtn}`}
            onClick={(e) =>   setRenderingComponent("displayer")}
          >
            Cancel
          </button>
          <button
            id="submitBtn"
            className={`defaultBtn ${classes.saveBtn}`}
            >save
          </button>
        </div>
      </form>
      {displayLoader && <FormSubmitLoader message={"Loading..."} />}
    </div>
  );
};
export default ProfileEditor;

//display a advice to give true details becouse essays are personalized
