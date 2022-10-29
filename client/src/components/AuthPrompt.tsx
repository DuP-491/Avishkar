import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginBox from '../simplistic/components/Authentication/LoginBox';
import SignupBox from '../simplistic/components/Authentication/SignupBox';
import ForgotPasswordBox from '../simplistic/components/Authentication/ForgotPasswordBox';
function AuthPrompt(props: Props) {
  const { closePopup, authSuccessCallback, signUpSuccessCallback } = props;
  const [currentPromt, setCurrentPromt] = useState('Login');

  return (
    <div className="z-40 flex items-center justify-center w-full h-full backdrop-blur-sm">
      {currentPromt === 'Login' && (
        <LoginBox
          onForgotPassword={() => setCurrentPromt('ForgotPassword')}
          onCrossPress={closePopup}
          onLogin={authSuccessCallback}
          onToggle={() => setCurrentPromt('Signup')}
        />
      )}
      {currentPromt === 'Signup' && (
        <SignupBox
          onCrossPress={closePopup}
          onSignup={signUpSuccessCallback}
          onToggle={() => setCurrentPromt('Login')}
        />
      )}
      {currentPromt === 'ForgotPassword' && <ForgotPasswordBox onCrossPress={closePopup} />}
    </div>
  );
}

AuthPrompt.propTypes = {
  closePopup: PropTypes.func.isRequired,
  authSuccessCallback: PropTypes.func.isRequired,
  signUpSuccessCallback: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof AuthPrompt.propTypes>;

export default AuthPrompt;
