import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { IoChevronBackOutline } from "react-icons/io5";
import { links } from "../../config/constant";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu || screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = "flex items-center gap-5 pl-5 py-3 text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-5 py-3 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <button
          className="absolute right-3 top-3 text-lg text-gray-600 hover:bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center"
          onClick={handleCloseSidebar}
        >
          <IoChevronBackOutline />
        </button>
      )}
      <>
        <div className="mt-16">
          <hr className="w-full" color="#E0E0E0" />
          {links.map((item, i) => (
            <div key={i} className="mt-3 ">
              {item.links.map((link) => (
                <NavLink
                  to={link.link}
                  key={link.name}
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    `${isActive ? activeLink : normalLink}hover:bg-light-gray`
                  }
                >
                  <span className="text-[21px]">{link.icon}</span>
                  {activeMenu && (
                    <span className="capitalize text-[#0001EE] text-[15px]">
                      {link.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
