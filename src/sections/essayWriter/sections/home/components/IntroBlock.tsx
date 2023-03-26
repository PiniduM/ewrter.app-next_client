import Link from "next/link";
import Image from "next/image";

import EssayWriterHeading from "../../../components/Headings/EssayWriterHeading";

import classes from "./IntroBlock.module.css";

import girlWithBooksImg from "@/assets/images/girlWithBooksWB.png"
const IntroBlock = () => {
  return (
    <div className={classes.IntroBlock}>
      <EssayWriterHeading />
      <div className={classes.content}>
        <Image
          src={girlWithBooksImg}
          alt="smart girl"
          className={classes.contentImg}
          />
        <h2 className={classes.intro}>
          Beautiful and creative
          <span style={{ color: " #524FD5" }}> essays</span>
          <br />
          on <span style={{ color: " #524FD5" }}>any topic</span>
        </h2>
        <p className={classes.description}>
          The best essay writer
          <br />
          powered by AI
        </p>
        <Link href="/essay_writer/writer">
          <button className={`defaultBtn ${classes.btn}`}> Let 's go</button>
        </Link>
      </div>
    </div>
  );
};

//remove logo if not using
export default IntroBlock;
