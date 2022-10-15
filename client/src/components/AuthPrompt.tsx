import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginBox from '../simplistic/components/Authentication/LoginBox';
import SignupBox from '../simplistic/components/Authentication/SignupBox';
function AuthPrompt(props: Props) {
  const { closePopup, authSuccessCallback } = props;
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="z-40 flex justify-center items-center w-full h-full backdrop-blur-sm">
      {!showSignup && (
        <LoginBox
          onCrossPress={closePopup}
          onLogin={authSuccessCallback}
          onToggle={() => setShowSignup(true)}
        />
      )}
      {showSignup && (
        <SignupBox
          onCrossPress={closePopup}
          onSignup={authSuccessCallback}
          onToggle={() => setShowSignup(false)}
        />
      )}
    </div>
  );
}

AuthPrompt.propTypes = {
  closePopup: PropTypes.func.isRequired,
  authSuccessCallback: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof AuthPrompt.propTypes>;

export default AuthPrompt;
