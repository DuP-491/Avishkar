import React, { useRef, useState } from 'react';
import Cookies from 'js-cookie';
import AuthService from '../../services/AuthService';
import { toast } from 'react-toastify';
import Spinner from '../Common/Spinner';

/* eslint-disable */
interface ResetPasswordBoxPropType {
  onCrossPress: (e: any) => void;
  onInvalidToken: (e: any) => void;
}
/* eslint-enable */

function ResetPasswordBox({ onCrossPress, onInvalidToken }: ResetPasswordBoxPropType) {
  const [isLoading, setIsLoading] = useState(false);
  const { key } = Object.fromEntries(new URLSearchParams(location.search));

  function handleResetPassword(e: any) {
    const password = PasswordRef.current.value;
    setIsLoading(true);
    let token = '';
    if (key === undefined) {
      onCrossPress(e);
      onInvalidToken(e);
      return;
    } else token = key;
    AuthService.resetPassword(password, token)
      .then((data) => {
        setIsLoading(false);
        if (data['success']) {
          Cookies.set('token', token);
          toast.success('Password reset successfully!');
          onCrossPress(e);
        } else if (data['message'] === 'Invalid token!') {
          toast.error(
            'invalid or expired token! please generate new token by clicking forgot password again'
          );

          onCrossPress(e);
          onInvalidToken(e);
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Please try again later!');
      });
  }
  const PasswordRef = useRef(document.createElement('input'));

  return (
    <>
      <div className="w-2/3 max-w-xl bg-gray-900/[0.5] h-3/5 rounded-lg flex flex-col p-10">
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
        <span className="self-center m-4 text-xl font-black text-white">RESET PASSWORD</span>
        <form className="w-full">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0"
                htmlFor="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
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
                className="px-4 py-2 mr-10 font-bold text-white capitalize bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                type="button"
                onClick={handleResetPassword}>
                {isLoading ? (
                  <Spinner displayTxt="Sending Password Reset Mail" />
                ) : (
                  'Send Password Reset Mail'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPasswordBox;
