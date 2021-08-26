import React from 'react';

const Login = () => (
  <div>
    <div>
      <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
      <div>
        <div>
          <label htmlFor="input-email">
            E-mail
            <input
              id="input-email"
              type="text"
            />
          </label>
          <label htmlFor="input-password">
            Password
            <input
              id="input-password"
              type="text"

            />
          </label>
          <button type="button">
            <span>Login</span>
          </button>
        </div>
      </div>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button>
              <span className="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
          <div>
            <button>
              <span className="inline-block ml-1">Help</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5">
      <div className="grid grid-cols-2 gap-1">
        <div className="text-center sm:text-left whitespace-nowrap">
          <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="inline-block ml-1">Back to your-app.com</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
