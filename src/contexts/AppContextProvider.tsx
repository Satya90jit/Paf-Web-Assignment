import { useIsMounted } from "@/hooks";
import { AppContextType, LanguageType } from "@/types";
import { getFromLocalStorage, saveToLocalStorage } from "@/utils";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext<AppContextType>({
  selectedLanguage: "hindi",
});

const AppContextProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const isMounted = useIsMounted();
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageType>("english");

  const changeLanguage = useCallback((lang: LanguageType) => {
    isMounted.current && setSelectedLanguage(lang);
    saveToLocalStorage("currentLanguage", lang);
  }, []);

  useEffect(() => {
    const langData: string | null = getFromLocalStorage("currentLanguage");

    if (langData) setSelectedLanguage(langData as LanguageType);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext<AppContextType>(AppContext);

export default AppContextProvider;
