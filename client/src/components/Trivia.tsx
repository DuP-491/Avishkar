/* eslint-disable no-unused-vars */

//  TODO: Add check for a user answering same trivia multiple times

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { toast } from 'react-toastify';

function Trivia(props: Props) {
  const { question, answer, onClose } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const textDiv = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('w-[1000px]');
      baseDiv.current?.classList.add('w-0');
    }
    if (textDiv.current) {
      textDiv.current.classList.remove('w-[750px]');
      textDiv.current?.classList.add('w-0');
    }
  };

  const handleSubmit = () => {
    console.log(answer);
    // handle given answer here
    toast.success('Correct! You have been awarded 1000 points!');
    sessionStorage.setItem('dailyTrivia', 'true');
    handleClick();
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('w-0');
        baseDiv.current?.classList.add('w-[1000px]');
      }
    }, 100);
    setTimeout(() => {
      if (textDiv.current) {
        textDiv.current.classList.remove('w-0');
        textDiv.current?.classList.add('w-[750px]');
      }
    }, 500);
  }, [baseDiv]);

  return (
    <>
      <div
        ref={baseDiv}
        className="z-40 flex flex-col w-0 mx-auto mb-16 text-xl font-normal transition-all duration-500 h-[300px] px-32 py-24 font-pfeffer"
        style={{
          backgroundImage: `url("/npc-scroll.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        {/* Text */}
        <div ref={textDiv} className="w-0 mb-4 text-yellow-800 transition-all duration-500">
          <Typewriter
            options={{
              strings: question,
              autoStart: true,
              cursor: '',
              delay: 25,
              loop: false
            }}
          />
        </div>

        {/* Button Controls */}
        <div className="flex flex-row font-bold">
          {/* Input to accept answer */}
          <input
            type="text"
            className="w-1/2 px-2 py-1 text-black bg-yellow-100 border-2 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
          />
          {/* Submit button */}
          <button
            className="w-1/2 px-2 py-1 ml-2 text-white bg-yellow-300 border-2 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>

        {/* TODO: toaster for correct / incorrect answer */}
      </div>
    </>
  );
}

Trivia.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Trivia.propTypes>;

export default Trivia;
