import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IProps {
  children: React.ReactNode;
}

type resutType = 
  { topic: string; content: string }
  | { topic: string; content: undefined }
  | undefined
  | null ;

interface IResult {
  get: resutType
  set: React.Dispatch<
    SetStateAction<resutType>
  >;
}

type WriterContextType = {
  result: IResult;
};

const WriterContext = createContext<WriterContextType>({
  result: { get: undefined, set: () => {} },
});

const WriterContextProvider = (props: IProps) => {
  //testing
  //Cookies.set("result",JSON.stringify({topic: "Uses of water",body:"water is useful\nvery useful\n\nwe can drink water"}))

  const [result, setResult] = useState<
    resutType
  >(undefined);

  const contextValue = {
    result: { get: result, set: setResult },
  };

  
  useEffect(() => {
    const storedResult = localStorage.getItem("result");
    const oldResult = storedResult
      ? JSON.parse(storedResult)
      : null;
    if (oldResult?.topic && oldResult?.content) setResult(oldResult);
    else setResult(null);

  }, []);

  if(result === undefined) return <></>;
  else 
  return (
    <WriterContext.Provider value={contextValue}>
      {props.children}
    </WriterContext.Provider>
  );
};

export { WriterContextProvider };
export default WriterContext;
