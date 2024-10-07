import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      login: {
        title: "Login",
        email: "Email",
        password: "Password",
        signIn: "Sign In",
        noAccount: "You don't have an account?",
        register: "Register",
        useCompanyEmails: "Please use company emails, like:",
        emailExamples: [
          "example@ent-en.com",
          "example@uzliti-en.com",
          "example@eriell.com",
        ],
        loginSuccess: "Login successful!",
        loginFailed: "Login failed. Please try again.",
        awaitingConfirmation: "Awaiting confirmation",
      },
    },
  },
  ru: {
    translation: {
      login: {
        title: "Войти",
        email: "Электронная почта",
        password: "Пароль",
        signIn: "Войти",
        noAccount: "У вас нет аккаунта?",
        register: "Регистрация",
        useCompanyEmails:
          "Используйте корпоративные электронные почты, такие как:",
        emailExamples: [
          "example@ent-en.com",
          "example@uzliti-en.com",
          "example@eriell.com",
        ],
        loginSuccess: "Успешный вход!",
        loginFailed: "Вход не удался. Попробуйте снова.",
        awaitingConfirmation: "Ожидание подтверждения",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Avtomatik ravishda foydalanuvchi tilini aniqlash
  .use(initReactI18next) // React uchun integratsiya
  .init({
    resources,
    fallbackLng: "en", // Til topilmasa, ingliz tilidan foydalaniladi
    interpolation: {
      escapeValue: false, // React-da XSS xavfsiz
    },
  });

export default i18n;
