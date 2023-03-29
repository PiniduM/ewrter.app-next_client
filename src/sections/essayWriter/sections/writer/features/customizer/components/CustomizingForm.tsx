import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import Cookies from "js-cookie";

import axIEssaywriter_api from "../../../../../controllers/axIEssaywriter_api";
import AuthContext from "@/controllers/AuthContext";
import WriterContext from "../../../WriterContext";
import getProfileData from "@/sections/user/features/profile/functions/getProfileData";
import TopicInput from "./inputs/TopicInput";
import WordCountInput from "./inputs/WordsCountInput";
import EssayTypeInput from "./inputs/EssayTypeInput";

import classes from "./CustomizingForm.module.css";
import { event } from "@/lib/GAHELPER";
interface IProfileData {
  fullName: string;
  age: string;
  gender: string;
  country: string;
  occupation: string;
}
interface IReqData {
  topic: string;
  type: string;
  count: string;
  complexity?: string;
  profileData?: IProfileData;
}

const DetailCollectingForm = () => {
  const router = useRouter();
  const [profileData, setProfileData] = useState<IProfileData | null>(null);
  const loginToken = useContext(AuthContext).loginToken?.get;
  const profileCreated = useContext(AuthContext).profileCreated?.get;
  useEffect(() => {
    if (loginToken && profileCreated) {
      getProfileData(loginToken)
        .then((profileData) => {
          setProfileData(profileData);
        })
        .catch(() => {});
    }
  }, [loginToken, profileCreated, setProfileData]);

  const setResult = useContext(WriterContext).result.set;
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const form = e.target as typeof e.target & {
      topic: { value: string };
      essayType: { value: string };
      wordsCount: { value: string };
      complexity: { value: string };
    };
    const topic = form.topic.value;
    const type = form.essayType.value;
    const count = form.wordsCount.value;
    const reqData: IReqData = {
      topic,
      type,
      count,
    };
    if (type === "general") reqData.complexity = form.complexity.value;
    else {
      if (profileData) {
        reqData.profileData = profileData;
      } else {
        return;
      }
    }

    const path = `/nonpremium/write_a_essay`;

    axIEssaywriter_api
      .post(path, reqData)
      .then((response) => {
        const result = { topic, content: response.data };
        setResult(result);
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        Cookies.set("result", JSON.stringify(result), { expires });
        localStorage.setItem("result",JSON.stringify(result));
      })
      .catch(() => {
        router.push("/unexpected_error");
      });

    setResult({
      topic,
      content: undefined,
    });
    event({
      action: "write an essay",
      params: {
        topic
      }
    })
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TopicInput />
      <WordCountInput />
      <EssayTypeInput />
      <div className={classes.writeButtonContainer}>
        <button type="submit" className="defaultBtn">
          write
        </button>
      </div>
    </form>
  );
};

export default DetailCollectingForm;
