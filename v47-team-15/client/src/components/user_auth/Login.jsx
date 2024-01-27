// import { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

function Login({ closeModal, isLoginModalOpen }) {

    
  return (
    <>
      <div className={`max-w-2xl mx-auto ${isLoginModalOpen ? '' : 'hidden'}`}>
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
                className="cursor-pointer text-white text-xl "
              >
                x
              </button>
            </div>
            <form className="w-full flex flex-col p-2">
             
              <div className="w-full mb-4 flex flex-col justify-center items-center">
                <label
                  htmlFor="fullName"
                  className="self-start px-16 text-white font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                //   value={formData.email}
                //   onChange={handleChange}
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
                //   value={formData.password}
                //   onChange={handleChange}
                  className="w-4/5 text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="w-full mb-4 flex flex-col justify-center items-center">
                <button
                  type="submit"
                  className="w-1/4 bg-[#00A83E] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                //   disabled={loading}
                >
                </button>
                
              </div>
              <small className="text-white text-center">
                If you already have an account proceed with{' '}
                <span className="text-blue-400 cursor-pointer">login</span>
              </small>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}

Login.propTypes = {
    closeModal: PropTypes.func,
    isLoginModalOpen: PropTypes.bool,
  };

export default Login