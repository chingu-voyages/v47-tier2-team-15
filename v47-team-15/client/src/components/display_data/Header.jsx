import logo from '../../assets/img/logo.svg';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };

  return (
    <>
      <div className="max-w-screen mx-auto">
        <nav className="flex flex-wrap justify-between items-center bg-[#1A183E] text-white p-2 px-4">
          <div className="flex flex-row items-center pb-4">
            <img src={logo} alt="logo" className="w-[4rem]" />
            <span className="mt-4">CryptoView</span>
          </div>

          <div
            className={`md:flex justify-between items-center w-full md:w-auto ${
                isOpen ? '' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul
              className={`flex-col items-center md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:font-medium py-1 md:py-0 transition-all delay-150 duration-300 overflow-hidden px-6`}
            >
              <li
                className="md:bg-transparent text-lg text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer"
                aria-current="page"
              >
                Home
              </li>
              <li className="md:bg-transparent text-lg text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer">
                Cryptocurrencies
              </li>
              <li className="md:bg-transparent text-lg text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer">
                Portfolio
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-end items-center">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#1A183E] dark:focus:ring-gray-600 ${isOpen ? 'absolute top-7 right-4' : ''}`}
              aria-controls="navbar-default"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button className="hidden md:block bg-white text-[#1A183E] rounded p-2 mx-1">
              Login
            </button>
            <button className="hidden md:block bg-[#00A83E] rounded p-2 mx-1">
              Sign up
            </button>
          </div>
        </nav>
        <hr className="hidden md:block text-white -mt-6"></hr>
      </div>
    </>
  );
}

export default Header;
