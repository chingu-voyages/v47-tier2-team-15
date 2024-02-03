import logo from '../../assets/img/logo.svg';
import { useState } from 'react';
import Registration from '../user_auth/Registration';
import Login from '../user_auth/Login';
import { useContext } from 'react';
import { UserContext } from '../userContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const { username, setUsername, userId, setUserId } = useContext(UserContext);
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = (type) => {
    if (type === 'login') {
      setLoginModalOpen(!loginModalOpen);
      setRegistrationModalOpen(false);
    } else if (type === 'signup') {
      setRegistrationModalOpen(!registrationModalOpen);
      setLoginModalOpen(false);
    }
  };

  const closeModal = () => {
    setRegistrationModalOpen(false);
    setLoginModalOpen(false);
    console.log('close');
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };

  const handleProfileClick = () => {
    if (userId) {
      setUsername(username);
      setUserId(userId);
      navigate('/portfolio');
    } else {
      toggleModal('login');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3003/auth/logout',
        null,
        {
          withCredentials: true,
          responseType: 'json',
        },
      );

      if (response.status === 200) {
        localStorage.removeItem('authToken');
        setUsername('');
        setUserId('');
        toggleModal('login');
        navigate('/');
        console.log('Logout successful');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <div
        className={`max-w-screen mx-auto sticky top-0 z-20 ${isOpen ? 'fixed w-full' : ''}`}
      >
        <nav className="flex flex-wrap justify-between items-center bg-[#1A183E] text-white p-2 px-4">
          <div className="flex flex-row items-center pb-4">
            <img src={logo} alt="logo" className="w-[4rem]" />
            <span className="mt-4 md:text-xl">CryptoView</span>
          </div>

          <div
            className={`md:flex justify-between items-center w-full md:w-auto ${
              isOpen ? 'bg-[#24224B] block fixed left-0 top-20 py-4' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul
              className={`flex-col items-center md:flex-row flex md:space-x-16 mt-4 md:mt-0 md:font-medium py-1 md:py-0 px-6`}
            >
              <li className="md:bg-transparent md:text-xl text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="md:bg-transparent md:text-xl text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer">
                {username ?
                (<Link to="/portfolio">Portfolio</Link>)
                :
                (<button onClick={handleProfileClick} type="button" className="">
                Portfolio
              </button>)
                }
                
              </li>
              <li
                className="md:bg-transparent md:text-xl text-white block pl-3 pr-4 py-2 md:p-0 rounded transition ease-in-out delay-150 hover:scale-125 cursor-pointer"
                aria-current="page"
              >
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-end items-center">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#1A183E] dark:focus:ring-gray-600 ${
                isOpen ? 'absolute top-7 right-4' : ''
              }`}
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
            {username ? (
              <button
                onClick={() => handleLogout(userId)}
                className="hidden md:block bg-[#00A83E] rounded p-2 mx-1"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => toggleModal('login')}
                  className="hidden md:block bg-white text-[#1A183E] rounded p-2 mx-1"
                >
                  Login
                </button>

                {loginModalOpen && (
                  <Login
                    closeModal={closeModal}
                    loginModalOpen={loginModalOpen}
                    setLoginModalOpen={setLoginModalOpen}
                    setRegistrationModalOpen={setRegistrationModalOpen}
                  />
                )}

                <button
                  onClick={() => toggleModal('signup')}
                  className="hidden md:block bg-[#00A83E] rounded p-2 mx-1"
                >
                  Sign up
                </button>

                {registrationModalOpen && (
                  <Registration
                    closeModal={closeModal}
                    registrationModalOpen={registrationModalOpen}
                    setLoginModalOpen={setLoginModalOpen}
                    toggleModal={toggleModal}
                  />
                )}
              </>
            )}
          </div>
        </nav>
        <hr className="hidden md:block text-white -mt-6"></hr>
      </div>
    </>
  );
}

export default Header;
