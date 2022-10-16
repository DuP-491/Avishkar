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
      <div className="w-2/3 max-w-xl bg-gray-900/[0.5] h-3/5 rounded-lg flex flex-col p-10">
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
      </div>
    </>
  );
}

export default SignupBox;
