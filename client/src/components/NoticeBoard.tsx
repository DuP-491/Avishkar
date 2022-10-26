import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function NoticeBoard(props: Props) {
  const { setShowNoticeBoard } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const textDiv = useRef<HTMLDivElement>(null);
  const notices = [
    'Abstract submission for Webster has begun.',
    'The deadline for form submission is 2:00 PM today'
  ];

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('h-[859px]');
      baseDiv.current?.classList.add('h-0');
    }
    if (textDiv.current) {
      textDiv.current.classList.remove('h-[469px]');
      textDiv.current?.classList.add('h-0');
    }
    setTimeout(() => {
      setShowNoticeBoard(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('h-0');
        baseDiv.current?.classList.add('h-[859px]');
      }
      if (textDiv.current) {
        textDiv.current.classList.remove('h-0');
        textDiv.current?.classList.add('h-[469px]');
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
        className={`transition-all text-amber-900 font-pfeffer duration-500 flex items-center justify-center m-auto relative z-40 rounded-lg filter backdrop-blur-sm h-0 w-[690px]`}
        style={{
          backgroundImage: `url("/info-scroll.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <>
          <div
            ref={textDiv}
            className="w-1/2 h-0 overflow-auto whitespace-pre-line transition-all duration-500 noscroll">
            Hello, Player!
            <p className="text-2xl font-bold text-center">Welcome to MNNIT</p>
            <p className="text-xs font-bold text-center">(Avishkar 2022)</p>
            <br />
            <p className="text-xl font-bold text-center">Notices</p>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
            vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum
            quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
            molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
            sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
            error harum maxime adipisci amet laborum.
            <br />
            <p className="text-sm text-center">
              Thank you for talking part in Avishkar 2k22. We hope you are enjoying it. If you have
              any questions or need help, please contact the organizers at sampleemail@provider.com
            </p>
          </div>
          <img
            src={require('../images/cross-icon.png')}
            className="absolute cursor-pointer right-4 top-4"
            onClick={handleClick}
          />
        </>
      </div>
    </>
  );
}

NoticeBoard.propTypes = {
  setShowNoticeBoard: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof NoticeBoard.propTypes>;

export default NoticeBoard;
