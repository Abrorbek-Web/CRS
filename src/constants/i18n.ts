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
        placeHolderPassword: "Enter your password...",
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
      register: {
        title: "Register",
        email: "Email",
        placeHolderEmail: "Enter your email...",
        firstName: "Firstname",
        placeHolderFirst: "Enter your firstname",
        lastName: "LastName",
        placeHolderLast: "Enter your lastname",
        position: "Position",
        placeHolderSelectPosition: "Select Position...",
        phone: "Phone",
        placeHolderPhone: "Enter your phone...",
        password: "Password",
        placeHolderPassword: "Enter your password...",
        company: "Company",
        placeHolderCompany: "Select Company",
        logIn: "Log In",
        haveAccount: "You already have an account?",
        register: "Register",
        useCompanyEmails: "Please use company emails, like:",
        emailExamples: [
          "example@ent-en.com",
          "example@uzliti-en.com",
          "example@eriell.com",
        ],
        registerSuccess: "Register successful!",
        registerFailed: "Register failed. Please try again.",
        awaitingConfirmation: "Awaiting confirmation",
      },
      adminPanel: {
        adminPanel: "Admin Panel",
        id: "ID",
        firstName: "First name",
        lastName: "Last name",
        phoneNumber: "Phone Number",
        email: "Email",
        details: "Details",
        status: "Status",
      },
      adminSidebar: {
        dashboard: "Dashboard",
        projects: "Projects",
      },
      userDetail: {
        id: "ID",
        documentNumber: "Document Number",
        startTime: "Start Time",
        endTime: "End Time",
        createdDate: "Created Date",
        status: "Status",
      },
      user: {
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        position: "Position",
      },
      status: {
        new: "New",
        active: "Active",
        disable: "Disable",
      },
      update: {
        updatePassword: "Update Password",
        placeHolder: "Enter new password...",
        save: "Save",
      },
    },
  },
  ru: {
    translation: {
      register: {
        title: "Войти",
        email: "Электронная почта",
        placeHolderEmail: "Введите адрес электронной почты...",
        firstName: "Имя",
        placeHolderFirst: "Введите свое имя",
        lastName: "Фамилия",
        placeHolderLast: "Введите свою фамилию",
        position: "Позиция",
        placeHolderSelectPosition: "Выберите позицию...",
        phone: "Телефон",
        placeHolderPhone: "Введите свой телефон...",
        password: "Пароль",
        placeHolderPassword: "Введите свой пароль...",
        company: "Компания",
        placeHolderCompany: "Выберите компанию",
        logIn: "Авторизоваться",
        haveAccount: "У вас уже есть аккаунт?",
        signIn: "Войти",
        noAccount: "У вас уже есть аккаунт?",
        register: "Регистрация",
        useCompanyEmails:
          "Используйте корпоративные электронные почты, такие как:",
        emailExamples: [
          "example@ent-en.com",
          "example@uzliti-en.com",
          "example@eriell.com",
        ],
        registerSuccess: "Регистрация прошла успешно!",
        registerFailed:
          "Зарегистрироваться не удалось. Пожалуйста, попробуйте еще раз.",
        awaitingConfirmation: "Ожидание подтверждения",
      },
      login: {
        title: "Войти",
        email: "Электронная почта",
        placeHolderEmail: "Введите адрес электронной почты...",
        password: "Пароль",
        placeHolderPassword: "Введите свой пароль...",
        logIn: "Авторизоваться",
        noAccount: "У вас нет аккаунта?",
        signIn: "Войти",
        login: "Регистрация",
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
      adminPanel: {
        adminPanel: "Панель администратора",
        id: "Ид",
        firstName: "Имя",
        lastName: "Фамилия",
        phoneNumber: "Номер телефона",
        email: "Электронная почта",
        details: "Подробности",
        status: "Статус",
      },
      adminSidebar: {
        dashboard: "Панель управления",
        projects: "Проекты",
      },
      userDetail: {
        id: "Ид",
        documentNumber: "Номер документа",
        startTime: "Время начала",
        endTime: "Конец Времени",
        createdDate: "Дата создания",
        status: "Статус",
      },
      user: {
        fullName: "Полное имя",
        email: "Электронная почта",
        phone: "Телефон",
        position: "Позиция",
      },
      status: {
        new: "Новый",
        active: "Активный",
        disable: "Запрещать",
      },
      update: {
        updatePassword: "Обновить пароль",
        placeHolder: "Введите новый пароль...",
        save: "Сохранять",
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
