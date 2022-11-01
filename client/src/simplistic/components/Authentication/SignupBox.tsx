import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import AuthService from '../../services/AuthService';
import Spinner from '../Common/Spinner';

/* eslint-disable */
interface SignupBoxPropType {
  onSignup: (e: any) => void;
  onCrossPress: (e: any) => void;
  onToggle: (e: any) => void;
}
/* eslint-enable */

function SignupBox({ onCrossPress, onSignup, onToggle }: SignupBoxPropType) {
  const [isLoading, setIsLoading] = useState(false);
  function LoggingIn(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const gender = GenderRef.current.value;
    const mobile = MobileRef.current.value;
    AuthService.signIn(name, email, collegeName, gender, mobile)
      .then((data) => {
        setIsLoading(false);
        if (data['success']) {
          toast.success('A verification mail has been sent!');
          onSignup(e);
          onCrossPress(e);
        } else toast.error(data['message']);
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Please try again later!');
      });
  }

  const NameRef = useRef(document.createElement('input'));
  const EmailRef = useRef(document.createElement('input'));
  const GenderRef = useRef(document.createElement('select'));
  const MobileRef = useRef(document.createElement('input'));

  const [collegeName, setCollegeName] = useState('');

  useEffect(() => {
    if (EmailRef.current.value.endsWith('@mnnit.ac.in')) setCollegeName('MNNIT');
  }, [EmailRef.current.value]);

  return (
    <>
      <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-gray-900 bg-opacity-50 shadow backdrop-blur-sm sm:rounded-lg sm:px-10">
            <img
              // eslint-disable-next-line no-undef
              src={require('../../../images/cross-icon.png')}
              className="absolute cursor-pointer right-4 top-4 invert"
              onClick={onCrossPress}
            />
            <div className="flex items-center justify-center space-x-4 sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="w-auto h-12"
                src={require('../../Assets/logo.png')}
                alt="Avishkar Logo"
              />
              <h2 className="text-2xl font-bold tracking-tight text-center text-white">Sign Up</h2>
            </div>
            <div className="w-full mt-4 text-center text-white">
              MNNIT students must use their college GSuite ID
            </div>
            <form className="mt-6 space-y-6" onSubmit={LoggingIn} method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-50">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    ref={NameRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>
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
                    ref={EmailRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-50">
                  College Name
                </label>
                <div className="mt-1">
                  <input
                    id="college"
                    name="college"
                    type="text"
                    autoComplete="college"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    disabled={EmailRef.current.value.endsWith('@mnnit.ac.in')}
                    required
                    className={`${
                      EmailRef.current.value.endsWith('@mnnit.ac.in') ? 'cursor-not-allowed ' : ''
                    }block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-50">
                  Gender
                </label>
                <div className="mt-1">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    ref={GenderRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-50">
                  Mobile
                </label>
                <div className="mt-1">
                  <input
                    id="mobile"
                    name="mobile"
                    type="mobile"
                    autoComplete="mobile"
                    ref={MobileRef}
                    required
                    className="block w-full min-w-[22rem] bg-gray-200 bg-opacity-50 appearance-none rounded-md border border-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-slate-100 focus:outline-none focus:ring-slate-100 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm w-fit bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  {isLoading ? <Spinner displayTxt="Creating Account.." /> : 'Create Account'}
                </button>
                <button
                  onClick={onToggle}
                  className="flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm w-fit bg-slate-500 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  Already Registered?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="w-2/3 max-w-xl bg-gray-900/[0.5] h-3/5 rounded-lg flex flex-col p-10">
        <button className="self-end text-white" onClick={onCrossPress}>
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
        <span className="self-center m-4 text-xl font-black text-white">Signup</span>
        <form className="w-full">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-full-name">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Name"
                ref={NameRef}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-email">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="email"
                placeholder="Email"
                ref={EmailRef}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-college-name">
                College Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-college-name"
                type="text"
                placeholder="College Name"
                ref={CollegeNameRef}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-gender">
                Gender
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-gender"
                type="text"
                placeholder="Gender"
                ref={GenderRef}
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-mobile">
                Mobile
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
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
                className="px-4 py-2 mr-10 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                type="button"
                onClick={LoggingIn}>
                Sign Up
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
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
