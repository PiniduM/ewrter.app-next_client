import Link from "next/link";
import Image from "next/image";

import classes from "./EssayWriterHeading.module.css";
import essayWriterLogo from "@/assets/logos/essayWriterLogo.png"

const EssayWriterHeading = () => {
  return (
    <div className={classes.heading}>
      <div>
        <Link href="/essay_writer">
          <Image
            src={essayWriterLogo}
            alt="logo"
            className={classes.logo}
          />
        </Link>
      </div>
      <h1 className={classes.productName}> Essay writer </h1>
      <p className={classes.companyName}> by&nbsp;eWriter </p>
    </div>
  );
};
export default EssayWriterHeading;
