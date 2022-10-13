import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Info(props: Props) {
  const { showInfo, setShowInfo } = props;
  const baseDiv = useRef<HTMLDivElement>(null);

  setShowInfo(showInfo);
  console.log(showInfo);

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('h-[859px]');
      baseDiv.current?.classList.add('h-0');
    }
    setTimeout(() => {
      setShowInfo(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('h-0');
        baseDiv.current?.classList.add('h-[859px]');
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
        className={`transition-all duration-500 flex items-center justify-center m-auto relative z-40 rounded-lg filter backdrop-blur-sm h-0 w-[690px]`}
        style={{
          backgroundImage: `url("/info-scroll.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <div className="font-serif text-amber-900">Hello</div>
        <img
          src={require('../images/cross-icon.png')}
          className="absolute hidden cursor-pointer right-4 top-4"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

Info.propTypes = {
  showInfo: PropTypes.bool.isRequired,
  setShowInfo: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Info.propTypes>;

export default Info;
