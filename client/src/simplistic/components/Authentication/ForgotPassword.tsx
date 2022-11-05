import React, { useRef, useState } from 'react';
import AuthService from '../../services/AuthService';
import Logo from '../../Assets/logo.png';
import bgImage from '../../Assets/collage.jpg';
import { toast } from 'react-toastify';
import Spinner from '../Common/Spinner';
const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  function ResetPasswordEmail(e: any) {
    setIsLoading(true);
    e.preventDefault();
    const email = EmailRef.current.value;
    AuthService.forgotPassword(email)
      .then((data) => {
        setIsLoading(false);
        if (data['success']) {
          toast.success('Reset Link sent to your Email');
        } else {
          toast.error(data['message']);
        }
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Please try again later!');
      });
  }
  const EmailRef = useRef(document.createElement('input'));

  return (
    <div
      className="flex items-center justify-center w-full h-screen"
      style={{ background: `url(${bgImage})` }}>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
          <img className="w-16 h-16 mr-2" src={Logo} alt="logo" />
          Avishkar
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 capitalize md:text-2xl dark:text-white">
              Forgot Password
            </h1>
            <form className="space-y-4 md:space-y-6" method="POST" onSubmit={ResetPasswordEmail}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  ref={EmailRef}
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isLoading ? <Spinner displayTxt="sending Mail" /> : 'Send Mail'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
