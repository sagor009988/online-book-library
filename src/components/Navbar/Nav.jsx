import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Theme from "../Theme/Theme";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const themeFromLs = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", themeFromLs);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 px-10 shadow fixed z-10">
      <div className="flex-1">
        <h1 className="btn btn-ghost text-2xl font-black text-secondary gap-0">
          <span className="text-4xl font-bold">O</span>nline
          <span className="text-primary">Book</span>{" "}
        </h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex items-center px-5 gap-5 px-1">
        
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600 underline"
                  : "text-lg font-semibold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600 underline"
                  : "text-lg font-semibold"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600 underline"
                  : "text-lg font-semibold"
              }
            >
              Bookmarks
            </NavLink>
          
          
        </ul>
        <Theme theme={theme} setTheme={setTheme}></Theme>
      </div>
    </div>
  );
};

export default Nav;
