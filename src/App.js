import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./contexts/ContextProvider";
import Overview from "./pages/Overiew";
import Store from "./pages/Store/Store";
import Orders from "./pages/Orders/Orders";
import Chats from "./pages/Chats/Chats";
import Wallets from "./pages/Wallets/Wallets";
import Settings from "./pages/Settings/Settings";
import Messages from "./pages/Messages/Messages";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="bg-white">
      <BrowserRouter>
        <div className="flex relative">
          <div
            className={`${
              activeMenu ? "w-60" : "w-16"
            } fixed z-10 dark:bg-secondary-dark-bg bg-white border-r-1 border-gray-200`}
          >
            <Sidebar />
          </div>
          <div
            className={`min-h-screen w-full
              ${activeMenu ? "md:ml-60" : "flex-2"}
              `}
          >
            <div
              className={`fixed bg-[#1A76D2] navbar ${
                activeMenu ? "w-1200" : "w-full"
              }  py-3 shadow-gray-400 shadow-md`}
            >
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/store" element={<Store />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/wallets" element={<Wallets />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/messages" element={<Messages />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
