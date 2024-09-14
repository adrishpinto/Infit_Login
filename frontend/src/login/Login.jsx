import React, { useState } from "react";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import NumberDropDown from "./NumberDropDown";

function Login() {
  let [checked, setChecked] = useState(false);
  let check = () => {
    setChecked((i) => !i);
  };
  return (
    <>
      {/* LEFT SECTION*/}
      <div className="flex">
        <h1 className="text-3xl">{checked}</h1>
        <div className="w-[50%] min-h-screen">
          <div className=" mx-auto mt-0 w-[80%] p-10">
            <div className="text-[42px] font-bold text-center">
              Welcome Back, Olivia
            </div>
            <div className="text-center text-[#717373] text-lg pt-2">
              Welcome back! Please enter your details.
            </div>
            <div className="text-center pt-4 font-semibold">Login with:</div>
            {/* login with google,gmail... buttons  */}
            <div className="flex justify-center space-x-3 pt-2">
              <div className="border-[#6E6E6E] border inline-block w-[99px] flex items-center justify-center  px-3 rounded-lg">
                <img src={google} className="h-7 w-7" />
                <h2 className="opacity-55 pl-1 h-[39px] flex items-center justify-center text-[14px]">
                  Google
                </h2>
              </div>
              <div className="border-[#6E6E6E] border inline-block w-[99px] flex items-center justify-center  px-3 rounded-lg">
                <img src={gmail} className="h-7 w-7" />
                <h2 className="opacity-55 pl-1 h-[39px] flex items-center justify-center text-[14px]">
                  Gmail
                </h2>
              </div>
              <div className="border-[#6E6E6E] border inline-block w-[99px] flex items-center justify-center  px-3 rounded-lg">
                <img src={linkedin} className="h-7 w-7" />
                <h2 className="opacity-55 pl-1 h-[39px] flex items-center justify-center text-[14px]">
                  Linkedin
                </h2>
              </div>
            </div>
            {/* login with google,gmail... buttons  end*/}

            {/* or desgin */}
            <div className="flex items-center justify-center pt-5">
              <div className="flex items-center">
                <span className="border-t border-gray-600 w-[137px]"></span>
                <span className="mx-2 text-[10px] text-[#A3A6A6]">or</span>
                <span className="border-t border-gray-600 w-[137px]"></span>
              </div>
            </div>
            {/* or desgin end */}

            <div className="items-center justify-center flex flex-col">
              {/* email and password */}
              <h1 className="text-xl pt-3 w-[300px]">Email</h1>
              <input
                type="text"
                placeholder="Enter Your E-mail ID"
                className="border-b pt-5 pb-2 pl-5 text-[10px] border-[#A3A6A6] w-[300px] focus:outline-none focus:border-black"
              />

              <h1 className="text-xl pt-5 w-[300px]">Password</h1>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="border-b pt-5 pb-2 pl-5 text-[10px] border-[#A3A6A6] w-[300px] focus:outline-none focus:border-black"
              />

              <div className="w-[300px] flex items-center justify-between mt-1">
                <div className="flex items-center">
                  <input type="checkbox" />
                  <div className="ml-1 text-[10px] opacity-55">Remember me</div>
                </div>
                <div className="text-[10px] opacity-55 underline">
                  Forgot password?
                </div>
              </div>
              {/* end of email and password */}

              {/* number dropdown */}
              <div className=" w-[300px] mt-6">
                <h1 className="text-[12px] mb-3">
                  Enter Your Phone Number To Get OTP
                </h1>
                <NumberDropDown />
              </div>
              <div className="w-[300px] mt-5 flex">
                <div
                  className={`size-4 rounded-2xl border-[2.5px] border-[#717373] hover:cursor-pointer ${
                    checked ? `bg-blue-500` : ""
                  }
                  }`}
                  onClick={() => check()}
                ></div>
                <div className="text-[10px] text-[#717373] ml-1">
                  By clicking, I accept terms of service and privacy policy
                </div>
              </div>
              {/* number dropdown end*/}
              {/* login */}
              <div className="h-[52px] w-[337px] bg-[#EEE7F6] text-[#6D49B8] text-xl font-bold hover:cursor-pointer hover:bg-purple-200 flex items-center justify-center mt-5">
                Login
              </div>
              <div className="text-[12px] text-[#0000008C]">
                Do not have an account?
                <span className="text-[10px] underline text-opacity-85 text-black ml-2 hover:cursor-pointer">
                  SIGN UP
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SECTION END */}
        {/* RIGHT SECTION */}
        <div className="border border-slate-300 w-[50%] bg-gray-200 m-10"></div>
      </div>
    </>
  );
}

export default Login;
