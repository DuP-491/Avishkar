import React from 'react';
import PropTypes from 'prop-types';

function PromptButton(props: Props) {
  return (
    <div className={props.btnClass} onClick={props.customFunction}>
      {props.btnText}
    </div>
  );
}

PromptButton.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  customFunction: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof PromptButton.propTypes>;

export default PromptButton;
