import { useContext, useEffect, useState } from "react";
import WriterContext from "./WriterContext";


import Customizer from "./features/customizer/Customizer";
import Displayer from "./features/displayer/Displayer";

const Writer = () => {


  interface IWriting {
    topic: string
    content: string | undefined
  }

  const [writing,setWriting] = useState<IWriting | undefined>(undefined);


  useEffect (() => {
    const result = useContext(WriterContext).result.get;
    if(result) {setWriting(result); return;}
    const pendingResult = useContext(WriterContext).pendingResult.get;
    if(pendingResult) setWriting({topic: pendingResult.topic,content: undefined})

  },[WriterContext])
  if (writing) {
    return <Displayer writing={writing} />;
  } else {
    return <Customizer />;
  }
};

export default Writer;
