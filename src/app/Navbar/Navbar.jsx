import React from "react";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar-area">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            {/* <a className="btn normal-case text-xl">GrocerEx</a> */}
            <a href="/">
              <Image src={logo} alt="logo" width={150} height={60} />
            </a>
            {/* <a className="btn btn-ghost normal-case text-xl">GrocerEx</a> */}
            <div className="dropdown">
              <label tabIndex={0} className="btn lg:hidden">
                {/* <label tabIndex={0} className="btn btn-ghost lg:hidden"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/safdf">About</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/">Blog</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/">Shop</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
