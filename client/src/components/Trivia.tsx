/* eslint-disable no-unused-vars */

//  TODO: Add check for a user answering same trivia multiple times

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { toast } from 'react-toastify';
import { supabase } from '../game/config';

function Trivia(props: Props) {
  const { onClose, user, userCoinDetails } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const textDiv = useRef<HTMLDivElement>(null);
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [userAnswer, setUserAnswer] = React.useState('');
  const [qid, setQid] = React.useState(-1);

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

  const handleSubmit = async () => {
    // console.log(answer);
    if (userCoinDetails?.last_qid == qid) {
      toast.error('You already answered this question!');
      handleClick();
      setTimeout(() => {
        onClose();
      }, 500);
      return;
    }
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      toast.success(`Correct! You have been awarded ${points} points!`);
      const { data: _data, error } = await supabase
        .from('leaderboard')
        .update({ points: userCoinDetails.coins + points, last_qid: qid })
        .eq('user_id', user.id);
      if (error) {
        toast.error(error.message);
        handleClick();
        setTimeout(() => {
          onClose();
        }, 500);
      }
    } else {
      toast.error(`Incorrect! Please try again tomorrow!`);
      const { data: _data, error } = await supabase
        .from('leaderboard')
        .update({ last_qid: qid })
        .eq('user_id', user.id);
      if (error) {
        toast.error(error.message);
        handleClick();
        setTimeout(() => {
          onClose();
        }, 500);
      }
    }

    // handle given answer here
    sessionStorage.setItem('dailyTrivia', 'true');
    handleClick();
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    // Get latest trivia question
    (async function _() {
      const { data: question, error } = await supabase
        .from('trivia')
        .select('id,question,answer,coins')
        .order('id', { ascending: false })
        .limit(1)
        .single();
      if (error) {
        console.log(error);
        toast.error('No trivia questions found! Please try again later!');
        handleClick();
        setTimeout(() => {
          onClose();
        }, 500);
      }
      if (question) {
        console.log(question);
        setQid(question.id);
        setQuestion(question.question);
        setAnswer(rot13(question.answer));
        setPoints(question.coins);
      }
    })();
  }, []);

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

  const rot13 = (str: string) => {
    var alphabets = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      ' ',
      '-',
      '_',
      '.',
      '&',
      '?',
      '!',
      '@',
      '#',
      '/'
    ];
    var alphabets13 = [
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      ' ',
      '-',
      '_',
      '.',
      '&',
      '?',
      '!',
      '@',
      '#',
      '/'
    ];
    var resultStr = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < alphabets.length; j++) {
        if (str[i] === alphabets[j]) {
          resultStr.push(alphabets13[j]);
        }
      }
    }
    return resultStr.join('');
  };

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
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
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
  onClose: PropTypes.func.isRequired,
  user: PropTypes.any.isRequired,
  userCoinDetails: PropTypes.any.isRequired
};

type Props = PropTypes.InferProps<typeof Trivia.propTypes>;

export default Trivia;
