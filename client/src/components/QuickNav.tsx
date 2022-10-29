/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import { TELEPORT_LOCATIONS } from '../game/consts';
import PropTypes from 'prop-types';

function QuickNav(props: Props) {
  const { setShowQuickNav, teleport } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const textDiv = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (baseDiv.current) {
      baseDiv.current.classList.remove('h-[800px]');
      baseDiv.current?.classList.add('h-0');
    }
    if (textDiv.current) {
      textDiv.current.classList.remove('h-[469px]');
      textDiv.current?.classList.add('h-0');
    }
    setTimeout(() => {
      setShowQuickNav(false);
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('h-0');
        baseDiv.current?.classList.add('h-[800px]');
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
        className={`transition-all text-neutral-800 font-pfeffer duration-500 flex items-center justify-center m-auto relative z-40 rounded-lg filter backdrop-blur-sm h-0 w-[505px]`}
        style={{
          backgroundImage: `url("/nav-scroll.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        <>
          <div
            ref={textDiv}
            className="items-center w-1/2 h-0 overflow-auto whitespace-pre-line transition-all duration-500 noscroll ">
            <p className="text-2xl font-bold text-center">Quick Navigation Menu</p>
            {/* <p className="text-xs font-bold text-center">(Avishkar 2022)</p> */}
            <ul>
              <li>
                Want to create teams?{' '}
                <span
                  className="underline cursor-pointer"
                  onClick={() => teleport(TELEPORT_LOCATIONS.quickCafe)}>
                  Visit cafe
                </span>
              </li>
              <li>
                Checkout what{`'`}s going on at GnoTalks.
                <span
                  className="underline cursor-pointer"
                  onClick={() => teleport(TELEPORT_LOCATIONS.gnotalks)}>
                  Visit Mp Hall
                </span>
              </li>
              <li>
                Want to take a break? <span className="underline cursor-pointer">Log out</span>
              </li>
            </ul>
            <p className="mt-8 text-xs font-bold text-center">
              (NOTE: You must be logged in before you can access most of the features of Quick
              Navigation Facility.)
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

QuickNav.propTypes = {
  setShowQuickNav: PropTypes.func.isRequired,
  teleport: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof QuickNav.propTypes>;

export default QuickNav;
