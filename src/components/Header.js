import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
const NavigationMenu = ({ isDarkMode, toggleTheme }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="flex items-center">
          <span
           className={` ${isDarkMode ? 'text-white' : 'text-primary-100'} font-bold text-4xl font-serif tracking-tighter font-black text-5xl`}
           >W.</span>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
        <button
            className={`w-8 h-8 rounded-full flex items-center justify-center `}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faMoon} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
            )}
          </button>
          <a
            href="#"
            className= {`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-yellow-600 text-base font-medium`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-yellow-600 text-base font-medium`}
          >
            New
          </a>
          <a
            href="#"
            className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-yellow-600 text-base font-medium`}
          >
            Popular
          </a>
          <a
            href="#"
            className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-yellow-600 text-base font-medium`}
          >
            Trending
          </a>
          <a
            href="#"
            className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-yellow-600 text-base font-medium`}
          >
            Categories
          </a>
        </div>
        <div className="lg:hidden">
          <button
            className="text-primary-100 p-2 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isCollapsed ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-primary-100'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isCollapsed && (
        <div className="fixed inset-0 flex justify-end">
          <div className={`w-64  ${isDarkMode ? 'bg-black' : 'bg-white'}` }>
            <div className="m-1.5">
            <button
            className={`w-8 h-8 rounded-full flex items-center justify-center`}
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faMoon} className="text-white" />
            ) : (
              <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
            )}
          </button>
            </div>
            <div className="flex justify-end p-4">
              <button
                className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-blue-700 focus:outline-none`}
                onClick={toggleNavbar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="px-4 py-2">
              <li>
                <a
                  href="#"
                  className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-blue-700 text-base font-medium block py-2`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className = {`hover:text-blue-700 text-base font-medium block py-2 ${isDarkMode ? 'text-white' : 'text-primary-100'} `}
                >`
                  New
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className= {`hover:text-blue-700 text-base font-medium block py-2 ${isDarkMode ? 'text-white' : 'text-primary-100'} `}
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-blue-700 text-base font-medium block py-2`}
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${isDarkMode ? 'text-white' : 'text-primary-100'} hover:text-blue-700 text-base font-medium block py-2`}
                >
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;















