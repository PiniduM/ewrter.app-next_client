import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

interface IProps {
  children: React.ReactNode;
}

interface IPendingResult {
  get: { topic: string } | undefined;
  set: React.Dispatch<SetStateAction<{ topic: string } | undefined>>;
}

interface IResult {
  get: { topic: string; content: string } | undefined;
  set: React.Dispatch<
    SetStateAction<{ topic: string; content: string } | undefined>
  >;
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

  const [pendingResult, setpendingResult] = useState<
    { topic: string } | undefined
  >(undefined);
  const [result, setResult] = useState<
    { topic: string; content: string } | undefined
  >(undefined);

  console.log(pendingResult);
  console.log(result);
  const contextValue = {
    pendingResult: { get: pendingResult, set: setpendingResult },
    result: { get: result, set: setResult },
  };

  const resultCookie = Cookies.get("result");
  const oldResult = resultCookie
    ? (JSON.parse(resultCookie as string) as { topic: string; content: string })
    : undefined;
  useEffect(() => {
    if (oldResult) setResult(oldResult);
  }, [oldResult]);

  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContextProvider };
export default WriterContext;
