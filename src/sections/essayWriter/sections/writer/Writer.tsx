import { useContext, useEffect, useState } from "react";
import WriterContext from "./WriterContext";

import Customizer from "./features/customizer/Customizer";
import Displayer from "./features/displayer/Displayer";

const Writer = () => {
  interface IWriting {
    topic: string;
    content: string | undefined;
  }

  const [writing, setWriting] = useState<IWriting | undefined>(undefined);

  const result = useContext(WriterContext).result.get;
  const pendingResult = useContext(WriterContext).pendingResult.get;

  useEffect(() => {
    if (result) setWriting(result);
    else if (pendingResult)
      setWriting({ topic: pendingResult.topic, content: undefined });
  }, [result, pendingResult]);
  return writing ? <Displayer writing={writing} /> : <Customizer />;
};

export default Writer;
