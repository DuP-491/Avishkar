import React from 'react';
import PropTypes from 'prop-types';

function AuthPrompt(props: Props) {
  const { closePopup, authSuccessCallback } = props;
  return (
    <div className="w-1/2 h-1/2 bg-white absolute bottom-0 left-1/2 z-30 flex-row space-y-3">
      <span>AuthPrompt</span>
      <button onClick={() => authSuccessCallback()}>Login</button>
      <button onClick={() => closePopup(false)}>Close</button>
    </div>
  );
}

AuthPrompt.propTypes = {
  closePopup: PropTypes.func.isRequired,
  authSuccessCallback: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof AuthPrompt.propTypes>;

export default AuthPrompt;
