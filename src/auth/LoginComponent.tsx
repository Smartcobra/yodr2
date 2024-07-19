import React, { useEffect, useState } from "react";
import loginImg from "../assests/img/login4.png";
import finalLogo from "../assests/img/finalYodrlogo.png";
import { text } from "stream/consumers";

const LoginComponent: React.FC = () => {
  const [loginWith, setLoginWith] = useState<"email" | "mobile">("email");
  const [userType, setUserType] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [mobileOtp, setMobileOtp] = useState<string>("");
  const [otpShow, setOtpShow] = useState<boolean>(false);
  const [otpTimer, setOtpTimer] = useState<number>(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<string>("");
  const [activeForm, setActiveForm] = useState<"form1" | "form2">("form1");

  useEffect(() => {
    if (otpShow) {
      startTimer(otpTimer);
    }
  }, [otpShow, otpTimer]);

  const startTimer = (duration: number) => {
    let timer = duration;
    const interval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      document.getElementById("time")!.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      if (--timer < 0) {
        clearInterval(interval);
        setOtpShow(false);
        alerterrorMsg("OTP has expired, please resend.");
      }
    }, 1000);
  };

  const handelLoginType = (form: "form1" | "form2") => {
    setActiveForm(form);
  };

  const alerterrorMsg = (msg: string) => {};

  const handleLoginWithChange = (type: "email" | "mobile") => {
    setLoginWith(type);
  };

  const handleSendVerificationCode = () => {
    // Logic to send verification code
  };

  const handleVerifyVerificationCode = () => {
    // Logic to verify code
  };
  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
            <img src={loginImg} className="lg:w-11/12 w-full object-cover" alt="login-image" />
          </div>

          <div className="md:max-w-md w-full mx-auto">
            <div className="flex flex-col justify-center items-center">
              <img src={finalLogo} className="h-[90px] w-[120px] animate__animated animate__heartBeat animate__delay-2s" />
              <p className="font-semibold">Welcome Back</p>
              <p className=" mb-6">To keep connected with us</p>
              <p className="font-s">please log in with your personal information by email address and password.</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 mb-8">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onClick={() => handelLoginType("form1")}
              >
                Login With Email ID
              </button>

              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                onClick={() => handelLoginType("form2")}
              >
                Login With Mobile No.
              </button>
            </div>

            {activeForm === "form1" && (
              <form>
                <div>
                  <form className="max-w-sm mx-auto" />
                  <label className="sr-only">Underline select</label>
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  >
                    <option selected>Choose a Option</option>
                    <option value="CL">Clinic</option>
                    <option value="DO">Doctor</option>
                    <option value="STF">Staff</option>
                  </select>
                </div>
                <div className="mt-8">
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label className="text-gray-800 ml-3 block text-sm">Remember me</label>
                  </div>
                  <div>
                    <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-orange-600 hover:bg-orange-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                  <p className="text-gray-800 text-sm text-center mt-6">
                    Don't have an account{" "}
                    <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                      Register here
                    </a>
                  </p>
                  <p className="text-gray-800 text-sm text-center">
                    Developed By{" "}
                    <a href="https://yobytech.com" target="_blank" className="text-red-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                      YOBYTECH
                    </a>
                  </p>
                </div>
              </form>
            )}

            {activeForm === "form2" && (
              
              <form>
                <div>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label className="text-gray-800 ml-3 block text-sm">Remember me</label>
                  </div>
                  <div>
                    <a href="jajvascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-orange-600 hover:bg-orange-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                  <p className="text-gray-800 text-sm text-center mt-6">
                    Don't have an account{" "}
                    <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                      Register here
                    </a>
                  </p>
                  <p className="text-gray-800 text-sm text-center">
                    Developed By{" "}
                    <a href="https://yobytech.com" target="_blank" className="text-red-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                      YOBYTECH
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
