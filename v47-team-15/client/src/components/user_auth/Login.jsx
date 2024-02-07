import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

function Login({ closeModal, loginModalOpen, setRegistrationModalOpen }) {
  const navigate = useNavigate();
  const { setUsername, setSuccessMessage } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3003/auth/login',
        formData,
        {
          withCredentials: true,
          responseType: 'json',
        },
      );
      console.log(response);
      setUsername(response.data.user.username);
      setSuccessMessage(true);
      console.log('Login data:', response.data.user);
      closeModal();
      navigate('/portfolio');
    } catch (error) {
      if (error.response.status === 401) {
        setError('Incorrect email or password. Please try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const navigateToSignup = () => {
    closeModal();
    setRegistrationModalOpen(true);
  };

  return (
    <>
      <div className={`max-w-2xl mx-auto ${loginModalOpen ? '' : 'hidden'}`}>
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-gray-500 opacity-40"
          onClick={closeModal}
        ></div>
        <div className="absolute top-32 left-0 right-0 z-50 w-full max-w-2xl px-4 mx-auto">
          <div className="w-full flex flex-col justify-center rounded-lg shadow p-2 bg-[#1A183E]">
            <div className="flex flex-row justify-between align-center">
              <span>&nbsp;</span>
              <h1 className="text-2xl text-white text-center font-bold py-4">
                Login
              </h1>
              <button
                onClick={closeModal}
                className="self-start cursor-pointer text-white text-xl "
              >
                x
              </button>
            </div>
            <form className="w-full flex flex-col p-2" onSubmit={handleSubmit}>
              <div className="w-full mb-4 flex flex-col justify-center items-center">
                <label
                  htmlFor="email"
                  className="self-start px-16 text-white font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-4/5 text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="w-full mb-4 flex flex-col justify-center items-center">
                <label
                  htmlFor="password"
                  className="self-start px-16 text-white font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-4/5 text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="w-full mb-4 flex flex-col justify-center items-center">
                <button
                  type="submit"
                  className="w-1/4 bg-[#00A83E] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  disabled={loading}
                >
                  {loading ? 'Logging In...' : 'Login'}
                </button>
              </div>
              <small className="text-white text-center">
                Don't have an account?
                <button
                  type="button"
                  onClick={navigateToSignup}
                  className="text-blue-400 cursor-pointer px-1"
                >
                  {' '}
                  Sign up
                </button>
              </small>

              {error && <div className="text-red-500 text-center mt-2">{error}</div>}
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

Login.propTypes = {
  closeModal: PropTypes.func,
  loginModalOpen: PropTypes.bool,
  setRegistrationModalOpen: PropTypes.func,
};

export default Login;
