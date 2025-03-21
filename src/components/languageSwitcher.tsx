// components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={changeLanguage}
      className="px-3 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100 transition"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
