import React from "react";
import Link from "next/link.js";
import Image from "next/image";

import classes from "./Home.module.css";
import girlWithBooksImg from "@/assets/images/girlWithBooks.png";
import manWithALaptopImg from "@/assets/images/manWithALaptop.png";

const Home: React.FC = () => {
  return (
      <div className="home">
        <div className={classes.description}>
          <p>
            power up your writings with
            <br />
            <span className={classes.purpleText}>cutting edge technolgies</span>
          </p>
          <Image src={manWithALaptopImg} alt="smart man" className={classes.img}/>
        </div>

        <div className={classes.writers_links}>
          <h2 className={classes.links_heading}>Our writers</h2>
          <div className={classes.writer_link}>
            <div className={classes.link_description}>
              <h3>Essay writer</h3>
              <p className={classes.introPara}>
                write amaizing essays <br />
                with the help of AI
              </p>
              <Link href="/essay_writer">
                <button className={`defaultBtn ${classes.btn}`}>Let's go</button>
              </Link>
            </div>
            <div className={classes.link_img}>
            <Image src={girlWithBooksImg} alt="smart girl" className={classes.img}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
