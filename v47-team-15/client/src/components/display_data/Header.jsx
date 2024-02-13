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
  const { userId, setUserId } = useContext(UserContext);
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

  const handleProfileClick = () => {
    if (userId) {
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
    <header className="sticky top-0 bg-[#1A183E] text-white z-10">
      {/* Top section with logo, signup, and login buttons */}
      <div className="flex justify-between items-center px-4 py-2 md:px-8">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="ml-2 text-xl">CryptoView</span>
          </div>
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="nav-link text-[1.25rem]">
                Home
              </Link>
            </li>
            <li>
              {userId ? (
                <Link to="/portfolio" className="nav-link text-[1.25rem]">
                  Portfolio
                </Link>
              ) : (
                <button
                  onClick={handleProfileClick}
                  className="nav-link text-[1.25rem]"
                >
                  Portfolio
                </button>
              )}
            </li>
            <li>
              <Link to="/news" className="nav-link text-[1.25rem]">
                News
              </Link>
            </li>
          </ul>
        </nav>
        {/* Login and Signup Buttons */}
        <div className="flex items-center">
          {userId ? (
            <button
              onClick={() => handleLogout(userId)}
              className="bg-[#00A83E] rounded p-2 mx-1"
            >
              Logout
            </button>
          ) : (
            <div className="flex">
              <button
                onClick={() => toggleModal('login')}
                className="bg-white text-[#1A183E] rounded p-2 mx-1 mb-3 md:mb-0"
              >
                Login
              </button>
              <button
                onClick={() => toggleModal('signup')}
                className="bg-[#00A83E] rounded p-2 mx-1 mb-3 md:mb-0"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Navigation Links (for smaller screens) */}
      <nav className="md:hidden bg-[#24224B] text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="nav-link text-[1.25rem]">
              Home
            </Link>
          </li>
          <li>
            {userId ? (
              <Link to="/portfolio" className="nav-link text-[1.25rem]">
                Portfolio
              </Link>
            ) : (
              <button
                onClick={handleProfileClick}
                className="nav-link text-[1.25rem]"
              >
                Portfolio
              </button>
            )}
          </li>
          <li>
            <Link to="/news" className="nav-link text-[1.25rem]">
              News
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login and Signup Modals */}
      {loginModalOpen && (
        <Login
          closeModal={closeModal}
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          setRegistrationModalOpen={setRegistrationModalOpen}
        />
      )}
      {registrationModalOpen && (
        <Registration
          closeModal={closeModal}
          registrationModalOpen={registrationModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          toggleModal={toggleModal}
        />
      )}
    </header>
  );
}

export default Header;
