import React, { useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdMail, IoMdNotifications } from "react-icons/io";
import avatar from "../../Images/avatar.jpg";
import { useStateContext } from "../../contexts/ContextProvider";
import NavButton from "../NavButton/NavButton";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  chatData,
  userControlModalData,
  userProfileData,
} from "../../config/constant";
import Dropdown from "../Dropdown/Dropdown";
import Switch from "../Switch/Switch";

const Navbar = () => {
  const navigate = useNavigate();
  const userProfileRef = useRef(null);
  const userControlModalRef = useRef(null);
  const {
    isClicked,
    screenSize,
    setActiveMenu,
    setScreenSize,
    currentColor,
    activeMenu,
    setIsClicked,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setIsClicked((prevState) => ({
        ...prevState,
        toggleUserControlModal: true,
      }));
    } else {
      setIsClicked((prevState) => ({
        ...prevState,
        toggleUserControlModal: false,
      }));
    }
  }, [screenSize, setIsClicked]);

  useEffect(() => {
    const handleClickOutside = (event, ref, stateKey) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked((prevState) => ({
          ...prevState,
          [stateKey]: false,
        }));
      }
    };

    const handleClickOutsideProfile = (event) => {
      handleClickOutside(event, userProfileRef, "userProfile");
    };

    const handleClickOutsideModal = (event) => {
      handleClickOutside(event, userControlModalRef, "userControlModal");
    };

    document.addEventListener("mousedown", handleClickOutsideProfile);
    document.addEventListener("mousedown", handleClickOutsideModal);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, [setIsClicked]);

  return (
    <div className="flex justify-between items-center mx-2 md:mx-6 relative">
      <div className="flex items-center gap-8">
        {!activeMenu && (
          <NavButton
            title="Menu"
            customFunc={() => setActiveMenu(true)}
            color={currentColor}
            icon={<FiMenu />}
          />
        )}
        <div className="flex items-center">
          <h2 className="text-white text-lg hidden md:block">Dashboard</h2>
          <span className="relative left-10 text-2xl text-white font-bold">
            <MdOutlineSearch />
          </span>
          <Input
            type="text"
            placeholder="Search..."
            className="bg-[#3F8AD8] hover:bg-[#5698DD] pl-12 pr-3 placeholder:text-[#98c4f2] py-2 rounded focus:outline-none text-white"
          />
        </div>
      </div>

      {!isClicked.toggleUserControlModal ? (
        <div className="flex items-center gap-3">
          <Switch />
          <NavButton
            title="mails"
            dotColor="#D32F2F"
            customFunc={() => navigate("/messages")}
            color={currentColor}
            icon={<IoMdMail />}
            messages={chatData.length}
          />
          <NavButton
            title="Chat"
            dotColor="#D32F2F"
            customFunc={() => navigate("/messages")}
            color={currentColor}
            icon={<IoMdNotifications />}
            messages={chatData.length}
          />
          <div
            className="flex items-center gap-2 cursor-pointer p-1 rounded-lg"
            onClick={() =>
              setIsClicked((prevState) => ({
                ...prevState,
                userProfile: true,
              }))
            }
          >
            <img src={avatar} alt="user" className="rounded-full w-8 h-8 " />
          </div>
          {isClicked.userProfile && (
            <div ref={userProfileRef}>
              <Dropdown>
                <div className="flex gap-5 items-center">
                  <img
                    className="rounded-full h-12 w-12"
                    src={avatar}
                    alt="user-profile"
                  />
                  <p className="text-md">Jamal</p>
                </div>
                <div className="pt-4 pb-4 space-y-3">
                  {userProfileData.map((item, index) => (
                    <div key={index} className="flex gap-4 cursor-pointer">
                      <span className="text-xl">{item.icon}</span>
                      <p className="text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
              </Dropdown>
            </div>
          )}
        </div>
      ) : (
        <>
          <span
            className="text-white text-2xl cursor-pointer"
            onClick={() =>
              setIsClicked((prevState) => ({
                ...prevState,
                userControlModal: true,
              }))
            }
          >
            <BiDotsVerticalRounded />
          </span>
          {isClicked.userControlModal && (
            <div ref={userControlModalRef}>
              <Dropdown>
                <div className="pt-4 pb-4 space-y-5">
                  {userControlModalData.map((item, index) => (
                    <NavLink
                      to="/messages"
                      key={index}
                      className="flex gap-4 cursor-pointer"
                    >
                      <span className="text-2xl">{item.icon} </span>
                      <p className="text-mds">{item.title}</p>
                    </NavLink>
                  ))}
                  <div className="flex gap-4 cursor-pointer">
                    <img
                      className="rounded-full h-6 w-6"
                      src={avatar}
                      alt="user-profile"
                    />
                    <p className="text-mds">Profile</p>
                  </div>
                </div>
              </Dropdown>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;
