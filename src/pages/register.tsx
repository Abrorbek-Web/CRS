import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import bgImg from "../assets/bg-image.jpg";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Select, { SingleValue } from "react-select";

interface User {
  email: string;
  first_name: string;
  last_name: string;
  position: string;
  phone_number: string;
  password: string;
  company: string;
}

function checkEmailDomain(email: string) {
  const validDomains = ["@ent-en.com", "@uzliti-en.com", "@eriell.com"];
  return validDomains.some((domain) => email.endsWith(domain));
}

interface Option {
  value: string;
  label: string;
}

const companyOptions: Option[] = [
  { value: "enter", label: "enter" },
  { value: "uzliti", label: "uzliti" },
];

const positionOptions: Option[] = [
  { value: "Project Manager", label: "Project Manager" },
  { value: "Project Engineer Manager", label: "Project Engineer Manager" },
  { value: "Project Coordinator", label: "Project Coordinator" },
  { value: "Planning & Control", label: "Planning & Control" },
  { value: "Document Control (DCC)", label: "Document Control (DCC)" },
  {
    value: "Head of Engineering Discipline",
    label: "Head of Engineering Discipline",
  },
  { value: "Engineer", label: "Engineer" },
  { value: "Draftman", label: "Draftman" },
];

export function Register() {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkEmailDomain(email)) {
      toast.error(
        <div>
          <p>Plese use company emails, like: </p>
          <ul>
            <li>example@ent-en.com,</li>
            <li>example@uzliti-en.com,</li>
            <li>example.@eriell.com</li>
          </ul>
        </div>
      );
      return;
    }

    const user: User = {
      email,
      first_name: firstName,
      last_name: lastName,
      position,
      phone_number: phoneNumber,
      password,
      company,
    };

    register(user)
      .then(() => {
        toast.success("Successfully registered!");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Problem to register.");
      });
  };

  return (
    <section
      className="bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="flex flex-col justify-center px-6 py-8 items-center min-h-screen lg:py-0 shadow">
        <div className="bg-white rounded-lg shadow md:mt-0 xl:p-0 w-full max-w-[800px]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Register
            </h1>
            <form onSubmit={handleOnSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    id="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your email..."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="FirstName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Firstname
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your firstname..."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Lastname
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your lastname..."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="position"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Position
                  </label>
                  <Select
                    className="flex-1 text-sm"
                    placeholder="Select Position..."
                    options={positionOptions}
                    onChange={(e: SingleValue<Option>) => {
                      if (e === null) {
                        setPosition("");
                      } else {
                        setPosition(e.value);
                      }
                    }}
                    isClearable
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your phone..."
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={isShowingPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password..."
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                    {isShowingPassword ? (
                      <AiOutlineEye
                        onClick={() => setIsShowingPassword((e) => !e)}
                        className="absolute top-0 right-0 h-full mr-3 cursor-pointer w-[22px]"
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => setIsShowingPassword((e) => !e)}
                        className="absolute top-0 right-0 h-full mr-3 cursor-pointer w-[22px]"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Company
                  </label>
                  <Select
                    className="flex-1 text-sm"
                    placeholder="Select Company..."
                    options={companyOptions}
                    onChange={(e: SingleValue<Option>) => {
                      if (e === null) {
                        setCompany("");
                      } else {
                        setCompany(e.value);
                      }
                    }}
                    isClearable
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={
                  email === "" ||
                  firstName === "" ||
                  lastName === "" ||
                  position === "" ||
                  company === "" ||
                  phoneNumber === "" ||
                  password === ""
                }
                className="w-full text-white bg-primary-600 hover:bg-primary-700 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
              <p className="text-sm font-light">
                You already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
