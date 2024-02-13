import React from "react";
import { chatData } from "../../config/constant";

const Messages = () => {
  return (
    <div className="mt-24 mb-8 px-12 space-y-4">
      <div className=" md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-2xl">
        <div className="flex items-center gap-3">
          <p className="text-lg dark:text-gray-200">Messages</p>
          <p className="text-xs p-1 px-2 bg-orange-600 text-white">
            Total {chatData.length} Messages
          </p>
        </div>
        <div className="mt-5 ">
          {chatData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer"
            >
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10"
                  src={item.image}
                  alt={item.message}
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 ">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
