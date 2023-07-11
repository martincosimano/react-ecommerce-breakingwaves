import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const navSidebarData = [
  {
    id:1,
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "sidebar-nav",
  },
  {
    id:2,
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "sidebar-nav",
  },
  {
    id:3,
    title: "Shop",
    path: "/shop",
    icon: <FaIcons.FaShoppingBag />,
    cName: "sidebar-nav",
  },
  {
    id:4,
    title: "Log In/Register",
    path: "/account",
    icon: <FaIcons.FaUser />,
    cName: "sidebar-nav",
  },
  {
  id:5,
  title: "Cart",
  path: "/cart",
  icon: <FaIcons.FaShoppingCart />,
  cName: "sidebar-nav",
  }
];