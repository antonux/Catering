import { AiFillLeftCircle } from "react-icons/ai";
import { HiArchive, HiChatAlt2 } from "react-icons/hi";
import { ImAddressBook } from "react-icons/im";
import { IoIosApps, IoIosCart, IoMdRestaurant, IoIosHappy, IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Tooltip = ({ text, children, open }) => {
  return (
    <div className="relative group">
      {children}
      {!open && (
        <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 rounded-md shadow-md text-white bg-gray-700 text-xs font-medium transition-all duration-200 scale-0 group-hover:scale-100 p-2 px-3 z-50">
          {text}
        </span>
      )}
    </div>
  );
};


export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <IoIosApps size="30" />, text: "Dashboard" },
    { title: "Inquiries", icon: <HiChatAlt2 size="30" />, gap: true, text: "Inquiries", path: '/AdminInquiry'},
    { title: "Event", icon: <ImAddressBook size="30" />, text: "Event", path: '/Events'},
    { title: "Menu Option", icon: <IoMdRestaurant size="30" />, gap: true, text: "Menu Option", path: '/Menu' },
    { title: "Archive", icon: <HiArchive size="30" />, gap: true, text: "Archive" },
    { title: "Profile Setting", icon: <IoMdPerson size="30" />, gap: true, text: "Profile Setting" },
  ];

  const sidePanel = (
    <div className="flex flex-row space-x-4 relative">
      <div
        className={`${open ? "w-72" : "w-20"} sticky top-0 duration-300 h-screen p-5 pt-8 bg-bg_thirty`}
      >
        <AiFillLeftCircle
          className={`absolute cursor-pointer -right-3 top-7 w-7 text-bg_ten text-4xl border-bg_thirty ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex justify-center">
          <img
            src="./src/assets/images/VLOGO.png"
            alt="Logo"
            className={`cursor-pointer duration-500 w-24 h-20`}
          />
        </div>

        <ul className="pt-6 justify-center">
          {Menus.map((menu, index) => (
            <Tooltip key={index} text={menu.text} open={open}>
              <NavLink
                to={menu.path}
                className={`text-gray-200 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-bg_ten hover:text-black rounded-md ${
                  menu.gap ? "mt-9" : "mt-2"}`}
                
              >
                <span>{menu.icon}</span>
                <span className={`${!open && "hidden"} origin-left duration-200 font-sans`}>
                  {menu.title}
                </span>
              </NavLink>
            </Tooltip>
          ))}
        </ul>
      </div>
    </div>
  );

  return sidePanel;
}