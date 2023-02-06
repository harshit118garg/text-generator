import { useContext, createContext, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const ContextApi = createContext<any>(null!);

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [parasRqd, setParasRqd] = useState<number>(1);
  const [copyText, setCopyText] = useState<string>("");

  return (
    <ContextApi.Provider
      value={{ parasRqd, setParasRqd, copyText, setCopyText }}
    >
      {children}
    </ContextApi.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(ContextApi);
};

export { ContextApi, Provider, useGlobalContext };
