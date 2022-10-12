import React, { useState } from 'react';
import LoginBox from './Authentication/LoginBox';
import SignupBox from './Authentication/SignupBox';

/* eslint-disable */
interface HomePagePropType {
  onRedirectPress: (e: any) => void;
}
/* eslint-enable */

function HomePage({ onRedirectPress }: HomePagePropType) {
  function LogInPopUp() {
    if (status != 'Home') setStatus('Home');
    else setStatus('Login');
  }
  function LoggingIn() {
    setIsLogin(true);
  }
  function LoggingOut() {
    setIsLogin(false);
  }
  function SignUpToggle() {
    if (status == 'Login') setStatus('Signup');
    else setStatus('Login');
  }

  function navbarRender() {
    return (
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <button>
                <h2 className="text-2xl font-bold text-white">Pro?</h2>
              </button>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}>
              <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <span
                    className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                    onClick={onRedirectPress}
                    id="Events">
                    <span
                      className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                      id="Events"></span>
                    <span className="relative group-hover:text-white" id="Events">
                      Events
                    </span>
                  </span>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <span
                    className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                    onClick={onRedirectPress}
                    id="TeamAvishkar">
                    <span
                      className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                      id="TeamAvishkar"></span>
                    <span className="relative group-hover:text-white" id="TeamAvishkar">
                      Team Avishkar
                    </span>
                  </span>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <span
                    className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                    onClick={onRedirectPress}
                    id="FAQ">
                    <span
                      className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                      id="FAQ"></span>
                    <span className="relative group-hover:text-white" id="FAQ">
                      FAQ
                    </span>
                  </span>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <span
                    className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                    onClick={onRedirectPress}
                    id="Sponsors">
                    <span
                      className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                      id="Sponsors"></span>
                    <span className="relative group-hover:text-white" id="Sponsors">
                      Sponsors
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  function BodyRender() {
    if (status == 'Home' && !isLogin)
      return (
        <>
          <img
            src="https://i.imgur.com/47LmWSp.png"
            style={{
              height: '5vw',
              width: '20vw',
              minHeight: '50px',
              minWidth: '200px'
            }}
          />
          <img
            src="https://i.imgur.com/cHH4xIh.png"
            style={{
              height: '20vw',
              width: '20vw',
              minHeight: '160px',
              minWidth: '160px'
            }}
          />
          <span
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
            onClick={LogInPopUp}>
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              Login
            </span>
          </span>
        </>
      );
    else if (status == 'Home' && isLogin)
      return (
        <>
          <img
            src="https://i.imgur.com/47LmWSp.png"
            style={{
              height: '5vw',
              width: '20vw',
              minHeight: '50px',
              minWidth: '200px'
            }}
          />
          <img
            src="https://i.imgur.com/cHH4xIh.png"
            style={{
              height: '20vw',
              width: '20vw',
              minHeight: '160px',
              minWidth: '160px'
            }}
          />
          <div className="flex flex-row justify-center gap-x-9">
            <span
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
              onClick={LoggingOut}>
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Logout
              </span>
            </span>
            <span className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
              <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Profile
              </span>
            </span>
          </div>
        </>
      );
    else if (status == 'Login')
      return <LoginBox onCrossPress={LogInPopUp} onLogin={LoggingIn} onToggle={SignUpToggle} />;
    else
      return <SignupBox onCrossPress={LogInPopUp} onSignup={LoggingIn} onToggle={SignUpToggle} />;
  }

  const [isLogin, setIsLogin] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [status, setStatus] = useState('Home');
  return (
    <>
      <div
        style={{
          overflow: 'scroll',
          background: 'url(https://i.imgur.com/P1ys3d9.jpg)',
          backgroundPosition: 'top',
          backgroundSize: 'cover'
        }}
        className="h-screen w-screen bg-cover bg-bottom no-scroll">
        {navbarRender()}
        <div className="flex flex-col justify-center h-full items-center">{BodyRender()}</div>
      </div>
    </>
  );
}

export default HomePage;
