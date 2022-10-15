import React, { useRef } from 'react';
import AuthService from '../../services/AuthService';

/* eslint-disable */
interface SignupBoxPropType {
  onSignup: (e: any) => void;
  onCrossPress: (e: any) => void;
  onToggle: (e: any) => void;
}
/* eslint-enable */

function SignupBox({ onCrossPress, onSignup, onToggle }: SignupBoxPropType) {
  function LoggingIn(e: any) {
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const collegeName = CollegeNameRef.current.value;
    const gender = GenderRef.current.value;
    const mobile = MobileRef.current.value;
    AuthService.signIn(name, email, collegeName, gender, mobile)
      .then((data) => {
        if (data['success']) {
          onSignup(e);
          onCrossPress(e);
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  }

  const NameRef = useRef(document.createElement('input'));
  const EmailRef = useRef(document.createElement('input'));
  const CollegeNameRef = useRef(document.createElement('input'));
  const GenderRef = useRef(document.createElement('input'));
  const MobileRef = useRef(document.createElement('input'));

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
              <h2 className="text-center text-2xl font-bold tracking-tight text-white">Sign Up</h2>
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
                    ref={MailRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-50">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    autoComplete="name"
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

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex mt-2 w-fit justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Sign up
                </button>
                <button
                  onClick={onToggle}
                  className="flex mt-2 w-fit justify-center rounded-md border border-transparent bg-slate-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Already Registered?
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
        <span className="text-white m-4 text-xl self-center font-black">Signup</span>
        <form className="w-full">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Name"
                ref={NameRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-email">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="email"
                placeholder="Email"
                ref={EmailRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-college-name">
                College Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-college-name"
                type="text"
                placeholder="College Name"
                ref={CollegeNameRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-gender">
                Gender
              </label>
            </div>
            <div className="md:w-2/3">
              {/* TODO: Replace input with dropdown containing values ["male", "female", "none"] */}
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-gender"
                type="text"
                placeholder="Gender"
                ref={GenderRef}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-mobile">
                Mobile
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-mobile"
                type="text"
                placeholder="Mobile"
                ref={MobileRef}
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
                Sign Up
              </button>
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={onToggle}>
                Already a User?
              </button>
            </div>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default SignupBox;
