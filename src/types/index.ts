import { SVGProps } from "react";
export type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

export type LanguageType = string;
export type AppContextType = {
  selectedLanguage: LanguageType;
  changeLanguage?: (lang: LanguageType) => void;
};
