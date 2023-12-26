import { useState } from "react";
import error from "../assets/Group.svg";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const [errorFields, setErrorFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    const isValid = {
      firstName: value.trim().length > 0,
      lastName: value.trim().length > 0,
      email: /\S+@\S+\.\S+/.test(value),
      password: value.trim().length > 0,
    };
    setErrorFields({
      ...errorFields,
      [name]: !isValid[name],
    });

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidForm =
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      /\S+@\S+\.\S+/.test(email) &&
      password.trim().length > 0;

    if (!isValidForm) {
      setErrorFields({
        firstName: firstName.trim().length === 0,
        lastName: lastName.trim().length === 0,
        email: !/\S+@\S+\.\S+/.test(email),
        password: password.trim().length === 0,
      });
    } else {
      toast({
        title: "Required Details.",
        description: "Please enter your details.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="bg">
      <div className="BgImg">
        <div className="flex font-poppins m-auto 2xl:mx-32 xl:py-32 xl:flex-row xl:ml-0 md:p-[10rem] md:flex-col md:gap-16 md:-ml-10 md:pt-20 lg:ml-[5rem] max-sm:flex-col max-sm:py-[4rem] max-sm:space-y-12 ">
          {/* first */}
          <div className="text-white space-y-7 my-auto xl:text-left md:text-center max-sm:text-center max-sm:mx-auto">
            <h1 className="w-[32.8125rem] text-[3.125rem] font-[700] leading-[3.4375rem] tracking-[-0.03256rem] max-sm:w-[20.4375rem] max-sm:text-[1.75rem] max-sm:leading-[2.25rem] max-sm:tracking-[-0.01825rem]">
              Learn to code by watching others
            </h1>
            <p className="w-[32.8125rem] text-[1rem] font-[500] leading-[1.625rem] max-sm:w-[20.4375rem] ">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          {/* second */}
          <div className="w-[33.75rem]  space-y-5 max-sm:w-[20.4375rem] max-sm:m-auto">
            <div className="h-[3.75rem] w-full rounded-[0.625rem] bg-[#5E54A4] text-white text-center max-sm:w-full max-sm:h-[5.5rem] ">
              <p className="font-[700] text-[0.9375rem] py-[18px] leading-[1.625rem] tracking-[ 0.01675] max-sm:w-[12.125rem] max-sm:m-auto max-sm:py-[1.13rem]">
                Try it free 7 days{" "}
                <span className="font-[400] "> then $20/mo. thereafter </span>
              </p>
            </div>
            <div className="w-full h-[33.625rem] rounded-[0.625rem] bg-white max-sm:h-[29.5rem] ">
              {/* forms */}
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="px-10 py-10 space-y-5 max-sm:p-7 ">
                  <div>
                    <div className="flex">
                      <input
                        className={`border-[1px] h-[3.5rem] w-[28.75rem] rounded-[0.3125rem] text-[#3D3B48] text-[0.875rem] font-[600] pl-8 tracking-[0.01563rem] leading-[1.625rem] focus:outline-none focus:border-[#5E54A4] focus:ring-1focus:ring-[#5E54A4]max-sm:w-[17.4375rem] ${
                          errorFields.firstName ? "border-red-500" : ""
                        }`}
                        value={firstName}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleInputChange}
                      />
                      {errorFields.firstName && (
                        <img
                          className="relative -ml-10"
                          src={error}
                          alt="Error"
                        />
                      )}
                    </div>
                    {errorFields.firstName && (
                      <div className="mt-2 text-[#FF7979] text-right">
                        <p className="text-[0.6875rem] font-[500]">
                          First Name cannot be empty
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex">
                      <input
                        className={`border-[1px] h-[3.5rem] rounded-[0.3125rem] w-[28.75rem] text-[#3D3B48] text-[0.875rem] font-[600] pl-8 tracking-[0.01563rem] leading-[1.625rem] opacity-0.75 focus:outline-none focus:border-[#5E54A4] focus:ring-1 focus:ring-[#5E54A4] max-sm:w-[17.4375rem] ${
                          errorFields.lastName ? "border-red-500" : ""
                        }`}
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Last Name"
                      />
                      {errorFields.lastName && (
                        <img
                          className="relative -ml-10"
                          src={error}
                          alt="Error"
                        />
                      )}
                    </div>
                    {errorFields.lastName && (
                      <div className="mt-2 text-[#FF7979] text-right">
                        <p className="text-[0.6875rem] font-[500]">
                          Last Name cannot be empty
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex">
                      <input
                        className={`border-[1px] h-[3.5rem] rounded-[0.3125rem] w-[28.75rem] text-[#3D3B48] text-[0.875rem] font-[600] pl-8 tracking-[0.01563rem] leading-[1.625rem]  opacity-0.75 focus:outline-nonefocus:border-[#5E54A4] focus:ring-1 focus:ring-[#5E54A4]max-sm:w-[17.4375rem] ${
                          errorFields.email ? "border-red-500" : ""
                        }`}
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email Address"
                      />
                      {errorFields.email && (
                        <img
                          className="relative -ml-10"
                          src={error}
                          alt="Error"
                        />
                      )}
                    </div>
                    {errorFields.email && (
                      <div className="mt-2 text-[#FF7979] text-right">
                        <p className="text-[0.6875rem] font-[500]">
                          Looks like this is not an email
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex">
                      <input
                        className={`border-[1px] h-[3.5rem] rounded-[0.3125rem] w-[28.75rem] text-[#3D3B48] text-[0.875rem] font-[600] pl-8 tracking-[0.01563rem] leading-[1.625rem] opacity-0.75 focus:outline-none  focus:border-[#5E54A4] focus:ring-1 focus:ring-[#5E54A4]max-sm:w-[17.4375rem] ${
                          errorFields.password ? "border-red-500" : ""
                        }`}
                        value={password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Password"
                      />
                      {errorFields.password && (
                        <img
                          className="relative -ml-10"
                          src={error}
                          alt="Error"
                        />
                      )}
                    </div>
                    {errorFields.password && (
                      <div className="mt-2 text-[#FF7979] text-right">
                        <p className="text-[0.6875rem] font-[500]">
                          Password cannot be empty
                        </p>
                      </div>
                    )}
                  </div>

                  <button className="w-full h-[3.5rem] bg-[#38CC8B] rounded-[0.3125rem] text-[0.935rem] font-[600] text-white">
                    CLAIM YOUR FREE TRIAL
                  </button>
                  <p className="text-[#BAB7D4] text-center text-[0.6875rem] font-[500] leading-[1.625rem] relative -top-2">
                    By clicking the button, you are agreeing to our{" "}
                    <span className="text-[#FF7979] font-[700]">
                      Terms and Services
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
