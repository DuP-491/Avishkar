import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InteractPrompt(props: Props) {
  const { stopInteract, setShowInteractPrompt, setStopInteract } = props;
  const baseDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log('stopInteract ', stopInteract);
    if (stopInteract && baseDiv.current) {
      baseDiv.current.classList.remove('mt-8');
      baseDiv.current?.classList.add('-mt-16');
      setTimeout(() => {
        setShowInteractPrompt(false);
        setStopInteract(false);
      }, 100);
    }
  }, [stopInteract]);

  useEffect(() => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('-mt-16');
      baseDiv.current?.classList.add('mt-8');
    }
  }, [baseDiv]);

  return (
    <div
      ref={baseDiv}
      className={`absolute transition-all text-3xl text-white bg-black bg-opacity-25 font-pfeffer duration-100 right-[42%] px-6 py-2 -mt-16 z-10 rounded-lg filter backdrop-blur-sm h-fit w-fit`}>
      Press E to interact
    </div>
  );
}

InteractPrompt.propTypes = {
  stopInteract: PropTypes.bool.isRequired,
  setShowInteractPrompt: PropTypes.func.isRequired,
  setStopInteract: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof InteractPrompt.propTypes>;

export default InteractPrompt;
