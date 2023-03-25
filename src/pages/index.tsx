import React from "react";
import Head from "next/head";

import Header from "@/common/components/Headers/Header";
import Home from "@/sections/home/Home";
import Footer from "@/common/components/Footers/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>eWriter</title>
        <meta
          name="description"
          content="Revolutionize your writing with eWriter's cutting-edge automated writing tools powered by artificial intelligence. Our Essay Writer tool uses AI to generate high-quality essays in minutes. Unlock your full potential and achieve your writing goals with eWriter. Try it now!"
        />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default HomePage;
