/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function NoticeBoard(props: Props) {
  const { onCloseNotice } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const textDiv = useRef<HTMLDivElement>(null);
  const notices = [
    'Operaomina puzzles are now available on its facebook page!',
    'Devfolio is one of the sponser for webster.'
  ];

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('h-[900px]');
      baseDiv.current?.classList.add('h-0');
    }
    if (textDiv.current) {
      textDiv.current.classList.remove('h-[369px]');
      textDiv.current?.classList.add('h-0');
    }
    setTimeout(() => {
      onCloseNotice();
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('h-0');
        baseDiv.current?.classList.add('h-[900px]');
      }
      if (textDiv.current) {
        textDiv.current.classList.remove('h-0');
        textDiv.current?.classList.add('h-[369px]');
      }
    }, 100);
  }, [baseDiv]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-screen h-screen filter backdrop-blur-sm"
        onClick={handleClick}></div>
      <div
        ref={baseDiv}
        className={`transition-all text-amber-900 font-pfeffer duration-500 flex items-center justify-center m-auto relative z-40 rounded-lg filter backdrop-blur-sm h-0 w-[598px]`}
        style={{
          backgroundImage: `url("/noticeboard.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <>
          <div
            ref={textDiv}
            className="w-1/2 h-0 ml-4 -mt-40 overflow-auto whitespace-pre-line transition-all duration-500 noscroll">
            <p className="text-xl font-bold text-center">Notices</p>
            <br />
            Important Notices Coming soon...
            <ul>
              {notices.map((notice, index) => (
                <li key={index}>{notice}</li>
              ))}
            </ul>
            <br />
            <p className="text-sm text-center">
              Thank you for talking part in Avishkar 2k22. We hope you are enjoying it. If you have
              any questions or need help, please contact the organizers at sampleemail@provider.com
            </p>
          </div>
          <img
            src={require('../images/cross-icon.png')}
            className="absolute hidden cursor-pointer right-4 top-4"
            onClick={handleClick}
          />
        </>
      </div>
    </>
  );
}

NoticeBoard.propTypes = {
  onCloseNotice: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof NoticeBoard.propTypes>;

export default NoticeBoard;
