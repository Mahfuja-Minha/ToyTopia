import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "font-bold text-amber-600 border-b-2 border-amber-500" : `${className} font-semibold text-gray-600 hover:text-amber-600`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;