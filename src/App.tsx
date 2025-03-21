import {useEffect } from "react";

import { useTranslation } from "react-i18next";
import "./i18n"; // Uzantı belirtme, TS kendisi ts dosyasını bulur
import MyRoutes from "./routers";


export default function App() {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    i18n.changeLanguage(browserLang);
  }, [i18n]);

  return (
    
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <MyRoutes />
    </div>
  );
}
