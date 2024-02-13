import React, { useState } from "react";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span
          className={`slider mx-4 flex h-6 w-[42px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#65C466]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-5 w-5 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[15px]" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-white">
          Active
        </span>
      </label>
    </>
  );
};

export default Switch;
