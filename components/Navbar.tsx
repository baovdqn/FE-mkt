import React from "react";
import { ThemeChanger } from "./common/ThemeChange";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full max-w-6xl m-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DC Project</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>
              Theme
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <ThemeChanger />
            </ul>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
