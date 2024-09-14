import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const NumberDropDown = () => {
  const [selectedCode, setSelectedCode] = useState("");

  const numArray = ["+1", "+44", "+61", "+81", "+33"];

  const handleChange = (event) => {
    setSelectedCode(event.target.value);
  };

  return (
    <>
      <div className="flex w-[300px] relative h-6 border-b border-[#A3A6A6] pb-1">
        <select
          id="country-code"
          value={selectedCode}
          onChange={handleChange}
          className="block text-[#A3A6A6] text-[12px] border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          <option value="">+91</option>
          {numArray.map((code, index) => (
            <option key={index} value={code}>
              {code}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter Your phone number"
          className="focus:outline-none text-[10px] text-gray-500 w-full border-l-2 border-[#A3A6A6] pl-2"
        />
        <FaArrowRight className="absolute right-1 rounded size-5 text-[#A3A6A6] bg-[#9595955E] top-0" />
      </div>
    </>
  );
};

export default NumberDropDown;
