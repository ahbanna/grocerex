// import React from "react";

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="flex flex-row items-center justify-between h-16 px-4 bg-white shadow-sm">
//         <a href="/" className="text-xl font-bold">
//           My Next.js Project
//         </a>
//         <ul className="hidden lg:flex flex-row items-center justify-end space-x-4">
//           <li>
//             <a href="/" className="text-gray-700 hover:text-gray-900">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="text-gray-700 hover:text-gray-900">
//               Contact
//             </a>
//           </li>
//           <li>
//             <a href="/items" className="text-gray-700 hover:text-gray-900">
//               Items
//             </a>
//           </li>
//         </ul>

//         {/* Hamburger menu for mobile screens */}
//         <button className="lg:hidden block" type="button" onClick={() => {}}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="2"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar-area">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-xl">GrocerEx</a>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <Link href="https://www.youtube.com/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
