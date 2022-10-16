import React, { useRef } from 'react';
import Cookies from 'js-cookie';
import AuthService from '../../services/AuthService';

/* eslint-disable */
interface ResetPasswordBoxPropType {
  onCrossPress: (e: any) => void;
  onInvalidToken: (e: any) => void;
}
/* eslint-enable */

function ResetPasswordBox({ onCrossPress, onInvalidToken }: ResetPasswordBoxPropType) {
  const { key } = Object.fromEntries(new URLSearchParams(location.search));

  function handleResetPassword(e: any) {
    const password = PasswordRef.current.value;

    let token;
    if (key === undefined) {
      onCrossPress(e);
      onInvalidToken(e);
      return;
    } else token = key;
    AuthService.resetPassword(password, token)
      .then((data) => {
        if (data['success']) {
          Cookies.set('token', data['token']);
          onCrossPress(e);
        } else if (data['message'] === 'Invalid token!') {
          onCrossPress(e);
          onInvalidToken(e);
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  }
  const PasswordRef = useRef(document.createElement('input'));

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
        <span className="text-white m-4 text-xl self-center font-black">RESET PASSWORD</span>
        <form className="w-full">
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
                onClick={handleResetPassword}>
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPasswordBox;
