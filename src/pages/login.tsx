import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { useTranslation } from "react-i18next";

import bgImg from "../assets/bg-img.png";
import { LanguageSwitcher } from "../components";
import { login } from "../services/authService";
import { signIn, signOut } from "../slices/authSlice";

function checkEmailDomain(email: string): boolean {
  const validDomains = ["@ent-en.com", "@uzliti-en.com", "@eriell.com"];
  return validDomains.some((domain) => email.endsWith(domain));
}

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checkEmailDomain(email)) {
      toast.error(
        <div>
          <p>Plese use company emails, like: </p>
          <ul className="">
            <li>example@ent-en.com,</li>
            <li>example@uzliti-en.com,</li>
            <li>example.@eriell.com</li>
          </ul>
        </div>
      );
      return;
    }

    setIsLoading(true);

    login(email, password)
      .then((res) => {
        setIsLoading(false);
        dispatch(signIn(res));
        toast.success(t("login.loginSuccess"));
      })
      .catch((err) => {
        setIsLoading(false);
        if ("Awaiting confirmation" === err.response.data.error) {
          navigate("/waiting");
        } else {
          dispatch(signOut());
          toast.error(t("login.loginFailed"));
        }
      });
  };

  return (
    <section
      className="bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0 shadow">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {t("login.title")}
            </h1>
            <form onSubmit={handleOnSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("login.email")}
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder={t("login.email")}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  {t("login.password")}
                </label>
                <div className="relative">
                  <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={isShowingPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder={t("login.password")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  {isShowingPassword ? (
                    <AiOutlineEye
                      onClick={() => setIsShowingPassword(!isShowingPassword)}
                      className="absolute top-0 right-0 h-full mr-3 cursor-pointer w-[22px]"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setIsShowingPassword(!isShowingPassword)}
                      className="absolute top-0 right-0 h-full mr-3 cursor-pointer w-[22px]"
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center h-[40px] text-white bg-primary-600 hover:bg-primary-700 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {!isLoading ? (
                  t("login.signIn")
                ) : (
                  <PropagateLoader color="white" />
                )}
              </button>
              <p className="text-sm font-light text-gray-500">
                {t("login.noAccount")}{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline"
                >
                  {t("login.login")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute right-12 top-12">
        <LanguageSwitcher />
      </div>
    </section>
  );
}
