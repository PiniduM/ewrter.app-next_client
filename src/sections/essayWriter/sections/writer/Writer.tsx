import { useContext, useEffect, useState } from "react";
import WriterContext from "./WriterContext";

import Customizer from "./features/customizer/Customizer";
import Displayer from "./features/displayer/Displayer";


const Writer = () => {

  const result = useContext(WriterContext).result.get;


  return result ?  <Displayer writing={result} /> : <Customizer />;
};

export default Writer;
