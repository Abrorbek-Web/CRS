import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
// import { setLanguage } from "../slices/languageSlice";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w320/us.png" },
  { code: "ru", name: "Русский", flag: "https://flagcdn.com/w320/ru.png" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const initial = localStorage.getItem("i18nextLng");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    // dispatch(setLanguage(lng)); // Store the selected language in Redux
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="border p-2 rounded-md"
      >
        {languages.find((lang) => lang.code === selectedLanguage)?.name}
      </button>
      {showDropdown && (
        <ul className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              <img src={lang.flag} alt={lang.name} className="w-6 h-4 mr-2" />
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
