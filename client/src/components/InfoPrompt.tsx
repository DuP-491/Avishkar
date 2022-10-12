/* eslint-disable no-unused-vars */

// TODO: Two buttons, one for yes and one for no
// FIXME: Make the prompt appear in the middle of the screen - 60% space
// TODO: Make the prompt disappear when the user clicks on either button
// TODO: Make the prompt disappear when the user clicks outside of the prompt
// TODO: Make the prompt disappear when the user presses the escape key
// DONE: Make a key for next, and at last propmt, make keys for yes and no
// no case me : two function, one for yes and one for no
// word break, height variable, upar ki taraf growth

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PromptButton from './PromptButton';
import Typewriter from 'typewriter-effect';

function InfoPrompt(props: Props) {
  const {
    text,
    isChoice,
    isCustom,
    yesCallback,
    noCallback,
    customText,
    customFunction,
    setShowInfoPrompt
  } = props;
  const [displayIndex, setDisplayIndex] = useState(0);
  let sentences = text.split('.');
  let textSize = sentences.length;

  const handleNext = () => {
    if (displayIndex + 1 < textSize) setDisplayIndex(displayIndex + 1);
  };
  const handlePrev = () => {
    if (displayIndex - 1 >= 0) setDisplayIndex(displayIndex - 1);
  };

  return (
    <div>
      <div className="fixed bottom-0 z-30 flex flex-col w-1/2 p-8 mx-auto font-mono text-lg font-normal bg-white border-4 border-black rounded-lg">
        {/* Text */}
        <div className="mb-4 text-yellow-600">
          <Typewriter
            options={{
              strings: sentences[displayIndex],
              autoStart: true,
              cursor: '',
              delay: 25,
              loop: false
            }}
          />
        </div>

        {/* Button Controls */}
        <div className="flex flex-row font-bold">
          {/* Next Prev */}
          <div className="flex flex-row justify-start w-1/2">
            <PromptButton
              btnText="Prev"
              btnClass="mr-4 hover:text-green-600"
              customFunction={handlePrev}
            />
            <PromptButton
              btnText="Next"
              btnClass="mr-4 hover:text-green-600"
              customFunction={handleNext}
            />
          </div>

          {/* Yes No */}
          <div className="flex flex-row justify-end w-1/2">
            {displayIndex + 1 == textSize &&
              (isCustom ? (
                <PromptButton
                  btnText={customText ?? ''}
                  btnClass="mr-4 hover:text-green-600"
                  customFunction={
                    customFunction ??
                    (() => {
                      setShowInfoPrompt(false);
                    })
                  }
                />
              ) : isChoice ? (
                <>
                  <PromptButton
                    btnText="No"
                    btnClass="mr-4 hover:text-green-600"
                    customFunction={handleNext}
                  />
                  <PromptButton
                    btnText="Yes"
                    btnClass="mr-4 hover:text-green-600"
                    customFunction={handleNext}
                  />
                </>
              ) : (
                <PromptButton
                  btnText="OK"
                  btnClass="mr-4 hover:text-green-600"
                  customFunction={
                    customFunction ??
                    (() => {
                      setShowInfoPrompt(false);
                    })
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

InfoPrompt.propTypes = {
  text: PropTypes.string.isRequired,
  setShowInfoPrompt: PropTypes.func.isRequired,
  isChoice: PropTypes.bool,
  isCustom: PropTypes.bool,
  yesCallback: PropTypes.func,
  noCallback: PropTypes.func,
  customText: PropTypes.string,
  customFunction: PropTypes.func
};

type Props = PropTypes.InferProps<typeof InfoPrompt.propTypes>;

export default InfoPrompt;
