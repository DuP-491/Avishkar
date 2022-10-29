import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tabletBg from '../../../images/tablet_bg.png';
import AuthService from '../../services/AuthService';
import Logo from '../../Assets/logo.png';
const ResetPassword = () => {
  const key = useParams().token;
  const navigate = useNavigate();

  function PasswordReset(e: any) {
    e.preventDefault();
    const password = PasswordRef.current.value;
    const confirmpassword = ConfirmPasswordRef.current.value;
    if (confirmpassword != password) {
      console.log('Confirm password does not match the password');
      toast.error('Confirm password does not match the password');
      return;
    }
    let token;
    if (key === undefined) {
      console.log('key===undefined');
      return;
    } else token = key;
    AuthService.resetPassword(password, token)
      .then((data) => {
        if (data['success']) {
          console.log('Success');
          navigate('/');
        } else if (data['message'] === 'Invalid token!') {
          // Invalid Token
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  }
  const PasswordRef = useRef(document.createElement('input'));
  const ConfirmPasswordRef = useRef(document.createElement('input'));

  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{ background: `url(${tabletBg})` }}>
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
              Reset Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={PasswordReset} method="POST">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  New Password
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
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  ref={ConfirmPasswordRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
