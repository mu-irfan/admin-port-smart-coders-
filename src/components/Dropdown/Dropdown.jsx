import React from "react";

const Dropdown = ({ children }) => {
  return (
    <div className="nav-item absolute right-1 top-1 bg-white shadow-xl py-4 px-8 rounded-lg w-72">
      {children}
    </div>
  );
};

export default Dropdown;
