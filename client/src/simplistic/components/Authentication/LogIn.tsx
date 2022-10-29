import Cookies from 'js-cookie';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../../services/AuthService';
import Logo from '../../Assets/logo.png';

const LogIn = () => {
  const EmailRef = useRef(document.createElement('input'));
  const PasswordRef = useRef(document.createElement('input'));

  function LoggingIn(e: any) {
    e.preventDefault();
    const name = EmailRef.current.value,
      password = PasswordRef.current.value;
    AuthService.logIn(name, password)
      .then((data) => {
        if (data['success']) {
          Cookies.set('token', data['token']);
          toast.success('Logged in successfully!');
          console.log('success');
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        toast.error('Please try again later!');
      });
  }

  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{
        background:
          'url(https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/bd05b4ed-7e37-4be9-85c8-078f067bd150/IN-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg)'
      }}>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
          <img className="w-16 h-16 mr-2" src={Logo} alt="logo" />
          Avishkar
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 capitalize md:text-2xl dark:text-white">
              Log In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={LoggingIn} method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  ref={EmailRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  ref={PasswordRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>

              <Link
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                to="/forgotpassword">
                Forgot password?
              </Link>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Log In
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                not having an account?{' '}
                <Link
                  to="/signup"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  SignUp here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
