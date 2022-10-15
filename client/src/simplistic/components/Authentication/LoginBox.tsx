import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import AuthService from '../../services/AuthService';

/* eslint-disable */
interface LoginBoxPropType {
  onLogin: (e: any) => void;
  onCrossPress: (e: any) => void;
  onToggle: (e: any) => void;
}
/* eslint-enable */

// eslint-disable-next-line no-unused-vars
function LoginBox({ onCrossPress, onLogin, onToggle }: LoginBoxPropType) {
  // eslint-disable-next-line no-unused-vars
  function LoggingIn(e: any) {
    const name = NameRef.current.value,
      password = PasswordRef.current.value;
    AuthService.logIn(name, password)
      .then((data) => {
        if (data['success']) {
          Cookies.set('token', data['token']);
          onLogin(e);
          onCrossPress(e);
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  }
  const NameRef = useRef(document.createElement('input'));
  const PasswordRef = useRef(document.createElement('input'));

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <img
              // eslint-disable-next-line no-undef
              src={require('../../../images/cross-icon.png')}
              className="absolute cursor-pointer right-4 top-4 invert"
              onClick={onCrossPress}
            />
            <div className="flex space-x-4 justify-center items-center sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="h-12 w-auto"
                src="https://i.imgur.com/cHH4xIh.png"
                alt="Avishkar Logo"
              />
              <h2 className="text-center text-2xl font-bold tracking-tight text-white">Login</h2>
            </div>
            <form className="space-y-6 mt-6" onSubmit={LoggingIn} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-50">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    ref={NameRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-50">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    ref={PasswordRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a href="#" className="font-medium text-slate-100 hover:text-slate-200">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex w-fit justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Sign in
                </button>
                <button
                  onClick={onToggle}
                  className="flex w-fit justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Register?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="w-2/3 max-w-xl bg-gray-900/[0.5] h-3/5 rounded-lg flex flex-col p-10 filter backdrop-blur-md">
        <button className="text-white self-end" onClick={onCrossPress}>
          X
        </button>
        <img
          src="https://i.imgur.com/cHH4xIh.png"
          style={{
            alignSelf: 'center',
            height: '4rem',
            width: '4rem'
          }}
        />
        <span className="text-white m-4 text-xl self-center font-black">LOGIN</span>
        <form className="w-full">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name">
                Email/Username
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-user-name"
                type="text"
                placeholder="Email/Username"
                ref={NameRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="***********"
                ref={PasswordRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-10"
                type="button"
                onClick={LoggingIn}>
                Log In
              </button>
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onToggle}>
                Register?
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default LoginBox;
