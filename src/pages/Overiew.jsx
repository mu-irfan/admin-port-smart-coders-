import React from "react";
import Rating from "../components/Rating/Rating";
import { IoMdArrowUp } from "react-icons/io";
import Charts from "../components/Charts/Charts";
import { chartsData, revenueStats } from "../config/constant";
import { useStateContext } from "../contexts/ContextProvider";

const Overview = () => {
  const { activeMenu } = useStateContext();

  return (
    <div
      className={`mt-24 mb-8 ${activeMenu ? "pl-8" : "pl-24"}  pr-8 space-y-4`}
    >
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h1 className="text-2xl text-gray-600">Hello, Chidinma</h1>
          <p className="text-gray-500 text-sm">Saturday, 22 January 2022</p>
        </div>
        <div className="bg-[#F0F0F7] px-6 py-4 rounded-lg flex gap-6">
          <div>
            <p className="text-xs text-gray-700">Current Rating</p>
            <span>
              4.00 <Rating />
            </span>
          </div>
          <div className="border-l border-gray-400 h-10"></div>
          <div>
            <p className="text-xs">Active Listing</p>
            <span className="text-[#341E9D] text-sm font-bold">100 Crafts</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {revenueStats.map((item, index) => (
          <div key={item.title} className="reset-link">
            <div
              className={`${item.bgColor} shadow-md text-gray-800 flex items-start justify-between rounded-xl px-7 py-6 h-full `}
            >
              <div className="flex flex-col justify-between">
                <h2 className="text-sm leading-[26px] font-semibold text-gray-500">
                  {item.title}
                </h2>
                <h1 className="text-3xl leading-[22px] py-2 text-slate-light">
                  {item.amount}
                </h1>
              </div>
              <div className="bg-white px-3 rounded-lg py-1 flex items-center gap-1">
                <span className="text-xl">
                  <IoMdArrowUp />
                </span>
                <h2
                  className={`${
                    index % 2 !== 0 ? "text-red-400" : "text-green-600"
                  } text-sm`}
                >
                  {item.percentage}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <Charts
          width={1320}
          height={300}
          data={chartsData}
          uvStroke="#8884d8"
          pvStroke="#65C466"
        />
      </div>
    </div>
  );
};

export default Overview;
