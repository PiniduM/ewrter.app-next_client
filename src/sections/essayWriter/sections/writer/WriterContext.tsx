import React,{ createContext, SetStateAction, useState } from "react";
import Cookies from "js-cookie";

interface IProps {
  children: React.ReactNode;
}

interface IPendingResult {
  get: {topic: string} | undefined;
  set: React.Dispatch<SetStateAction< {topic: string } | undefined >>;
}

interface IResult {
  get: {topic: string, content: string} | undefined;
  set: React.Dispatch<SetStateAction<{topic: string, content: string} |undefined>>;
}

type WriterContextType = {
  pendingResult: IPendingResult;
  result: IResult;
};

const WriterContext = createContext<WriterContextType>({
  pendingResult: { get: undefined, set: () => {} },
  result: { get: undefined, set: () => {} },
});

const WriterContextProvider = (props: IProps) => {
  //testing
  //Cookies.set("result",JSON.stringify({topic: "Uses of water",body:"water is useful\nvery useful\n\nwe can drink water"}))

  const oldResult = (Cookies.get("result")
  ? JSON.parse(Cookies.get("result") as string )
    : undefined )as {topic: string, content: string};

  const [pendingResult, setpendingResult] = useState<{topic: string} | undefined >(undefined);
  const [result, setResult] = useState<{topic: string, content: string} | undefined>(oldResult);

  const contextValue = {
    pendingResult: { get: pendingResult, set: setpendingResult },
    result: { get: result, set: setResult },
  };

  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContextProvider };
export default WriterContext;