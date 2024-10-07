import { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLng = e.target.value;
    changeLanguage(selectedLng);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">
        <span className="text-2xl"></span>
        <span>Eng</span>
      </option>
      <option value="ru">
        <span className="text-2xl"></span>
        <span>Rus</span>
      </option>
    </select>
  );
}
