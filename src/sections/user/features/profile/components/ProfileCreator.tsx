import { useRouter } from "next/router";
import { useState,useContext } from "react";
import Image from "next/image";
import Select from "react-select";

import AuthContext from "@/controllers/AuthContext";
import axIService_api from "../../../../service/controllers/axIServerService";
import {
  countryOptions,
  occupationOptions,
  genderOptions,
} from "../functions/optionLists";
import FormSubmitLoader from "@/common/components/Loaders/FormSubmitLoader";
import Cookies from "js-cookie";

import profileIcon from "@/assets/icons/profileIcon.png"
import classes from "./ProfileCreator.module.css";

interface IProps {
  currentValue : boolean | string
}


const ProfileCreator = () => {
  const [displayLoader, setDisplayLoader] = useState(false);
  const router = useRouter();
  const loginToken = useContext(AuthContext).loginToken.get;
  const setProfileCreated = useContext(AuthContext).profileCreated.set;

  const [slideNo, setSlideNo] = useState(0);
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");

  // const [countriesOptions, setCountriesOptions] = useState([]);

  // useEffect(() => {
  //   getCountriesOptions().then((options) => setCountriesOptions(options));
  // }, []);

  const SlidesNavBar = (props: IProps) => {
    const handleGoBack = () => {
      setSlideNo((current) => (current > 0 ? current - 1 : current));
    };
    const handleGoForward = () => {
      if (props.currentValue) {
        setSlideNo((current) => (current < 6 ? current + 1 : current));
        document.getElementById("warning")?.classList.remove(classes.active);
      } else {
        document.getElementById("warning")?.classList.add(classes.active);
      }
      console.log(slideNo);
    };

    const saveProfileInfo = () => {
      const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
      submitBtn.disabled = true;
      setDisplayLoader(true);
      const profileData = {
        fullName,
        age,
        gender,
        country,
        occupation,
      };

      const path = `/profile/createprofile`;
      axIService_api
        .post(path, {
          loginToken,
          profileData,
        })
        .then(() => {
          // only one type of response
          setProfileCreated(true);
          Cookies.set("profile_created","T")
          router.push("/user/profile");
        })
        .catch((err) => {
          if (err.response?.data === "already_created") {
            router.push("/user/profile");
          } else {
            router.replace("/unexpected_error");
          }
        })
        .finally(() => {
          setDisplayLoader(false);
          setTimeout(() => {
            submitBtn.disabled = false;
          }, 1000);
        });
    };

    return (
      <div className={classes.nav_btns}>
        {/*close btn added.but not aware of possible concerns*/}
        {slideNo === 0 ? (
          <button
            className={`defaultBtn ${classes.cancel_btn}`}
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
        ) : (
          <button
            className={`defaultBtn ${classes.navBtn}`}
            onClick={handleGoBack}
          >
            Previous
          </button>
        )}
        {slideNo === 6 ? (
          <button
            className={`defaultBtn ${classes.saveBtn}`}
            id="submitBtn"
            onClick={saveProfileInfo}
          >
            Create
          </button>
        ) : (
          <button
            className={`defaultBtn ${classes.navBtn}`}
            onClick={handleGoForward}
          >
            Next
          </button>
        )}
      </div>
    );
  };

  const Introduction = () => {
    return (
      <>
        <div className={classes.introBlock}>
          <h3 className={classes.h3}>
            We are using using these informations to write essays that are{" "}
            <span className={classes.purpleTxt}>
              perfectly matching with your requirements
            </span>
            .
          </h3>
          <p className={classes.introPara}>
            *You can update your profile informations at anytime
          </p>
          <p className={classes.warning} id="warning">
            {" "}
          </p>
        </div>
        <SlidesNavBar currentValue={true} />
      </>
    );
  };

  const FullNameInput = () => {
    return (
      <>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Full Name: </label>
          <input
            type="text"
            name="fullName"
            defaultValue={fullName}
            className={classes.txtInput}
            onBlur={(e) => setFullName(e.target.value)}
          />
          <p className={classes.warning} id="warning">
            Please Enter your full name
          </p>
        </div>
        <SlidesNavBar currentValue={fullName} />
      </>
    );
  };
  const AgeInput = () => {
    return (
      <>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Age: </label>
          <input
            type="number"
            name="age"
            maxLength={2}
            defaultValue={age}
            className={classes.txtInput}
            onBlur={(e) => setAge(e.target.value)}
          />
          <p className={classes.warning} id="warning">
            Please Enter your age
          </p>
        </div>
        <SlidesNavBar currentValue={age} />
      </>
    );
  };

  const GenderSelection = () => {
    return (
      <>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Gender: </label>
          <Select
            options={genderOptions}
            defaultValue={{ value: gender, label: gender }}
            menuPlacement="bottom"
            onChange={(choice) => setGender(choice?.value || "")}
          />
          <p className={classes.warning} id="warning">
            Please select your gender
          </p>
        </div>
        <SlidesNavBar currentValue={gender} />
      </>
    );
  };

  const CountrySelection = () => {
    return (
      <>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>Country : </label>
          <Select
            options={countryOptions}
            defaultValue={{ value: country, label: country }}
            menuPlacement="bottom"
            onChange={(choice) => setCountry(choice?.value || "")}
          />
          <p className={classes.warning} id="warning">
            Please select your country
          </p>
        </div>
        <SlidesNavBar currentValue={country} />
      </>
    );
  };

  const OccupationSelection = () => {
    return (
      <>
        <div className={classes.inputBlock}>
          <label className={classes.inputLabel}>You are a : </label>
          <Select
            options={occupationOptions}
            defaultValue={{ value: occupation, label: occupation }}
            menuPlacement="bottom"
            onChange={(choice) => {
              console.log(occupation);
              setOccupation(choice?.value || "");
            }}
          />
          <p className={classes.warning} id="warning">
            Please select your occupation
          </p>
        </div>
        <SlidesNavBar currentValue={occupation} />
      </>
    );
  };

  const Preview = () => {
    return (
      <>
        <div className={classes.previewBlock}>
          <h3 className={classes.h3}>Profile preview</h3>
          <ul className={classes.previewList}>
            <li>Full name: {fullName}</li>
            <li>Age: {age}</li>
            <li>Gender: {gender}</li>
            <li>Country: {country}</li>
            <li>Occupation: {occupation}</li>
          </ul>
        </div>
        <SlidesNavBar currentValue={true} />
        {displayLoader && <FormSubmitLoader message="Loading ..."/>}
      </>
    );
  };

  return (
    <div className={classes.creator}>
      <div className={classes.heading}>
        <Image
          src={profileIcon}
          alt="profile icon"
          className={classes.profileIcon}
        />
        <h2 className={classes.topic}>Create your profile</h2>
      </div>
      {slideNo === 0 && <Introduction />}
      {slideNo === 1 && <FullNameInput />}
      {slideNo === 2 && <AgeInput />}
      {slideNo === 3 && <GenderSelection />}
      {slideNo === 4 && <CountrySelection />}
      {slideNo === 5 && <OccupationSelection />}
      {slideNo === 6 && <Preview />}
      <div className={classes.disclaimer}>
        <p>
          disclaimer : profile informations my sent to AI models when generating
          personalized writings,read privacy policy for more details.
        </p>
      </div>
    </div>
  );
};

export default ProfileCreator;
