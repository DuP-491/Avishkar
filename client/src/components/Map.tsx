import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TELEPORT_LOCATIONS } from '../game/consts';
import * as Tooltip from '@radix-ui/react-tooltip';
function MiniMap(props: Props) {
  const { playerPosition, teleport, showMap, setShowMap } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const [showMarks, setShowMarks] = useState(false);

  const handleClick = () => {
    setShowMarks(!showMarks);
    if (baseDiv.current) {
      baseDiv.current.classList.remove('w-[894px]');
      baseDiv.current?.classList.add('w-0');
    }
    setTimeout(() => {
      setShowMap(!showMap);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (baseDiv.current) {
        baseDiv.current.classList.remove('w-0');
        baseDiv.current?.classList.add('w-[894px]');
      }
    }, 100);
    setTimeout(() => {
      setShowMarks(true);
    }, 600);
  }, [baseDiv]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-screen h-screen filter backdrop-blur-sm"
        onClick={handleClick}></div>
      <div
        ref={baseDiv}
        className={`transition-all duration-500 flex items-center justify-center m-auto relative z-40 bg-[#509b66] border-2 border-green-900 rounded-lg filter backdrop-blur-sm w-0 h-[768px]`}
        style={{
          backgroundImage: `url("/try5.png")`,
          backgroundSize: 'fill',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
        {showMarks && (
          <>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 226 226"
              className="absolute w-4 h-4 origin-[0px_0px] -translate-x-1/2 -translate-y-1/2"
              style={{
                top: Math.round(playerPosition.y) + '%',
                left: Math.round(playerPosition.x) + '%',
                rotate: playerPosition.rot + 'rad'
              }}>
              <g
                fill="none"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none">
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g id="Layer_1" fill="#ffffff">
                  <path d="M214.10272,119.54726l-193.19678,82.75596c-3.68917,1.59523 -8.00972,0.66475 -10.7683,-2.32651c-1.66176,-1.79463 -2.52581,-4.12114 -2.52581,-6.48092c0,-1.32929 0.29911,-2.69205 0.89732,-3.95481c23.39768,-48.42385 23.39768,-104.59158 0,-153.04869c-1.66176,-3.4564 -0.96385,-7.61081 1.6285,-10.43573l0.03327,-0.03327c2.75859,-2.99126 7.07913,-3.92174 10.7682,-2.32651l193.16361,82.8223c5.71637,2.42631 5.71637,10.53553 0,13.02818"></path>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 42 + '%',
                left: 57 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.library)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 76 + '%',
                left: 46 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.csed)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 63 + '%',
                left: 83 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.mpHall)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute w-4 h-4 cursor-pointer animate-pulse text-amber-400"
              style={{
                top: 13 + '%',
                left: 30 + '%'
              }}
              onClick={() => teleport(TELEPORT_LOCATIONS.yamunaCanteen)}>
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            {/* CYBERQUEST */}
            <Tooltip.Provider delayDuration={500} skipDelayDuration={400}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 41.2 + '%',
                      top: 70.2 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  CYBERQUEST
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* ELECTROMANIA */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 55.6 + '%',
                      top: 35.6 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  ELECTROMANIA
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* POWERSURGE */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 45.9 + '%',
                      top: 24.5 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  POWERSURGE
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* RASAYANS */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 40.4 + '%',
                      top: 32.8 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  RASAYANS
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* MECHROCOSM */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 53.82 + '%',
                      top: 60.62 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  MECHROCOSM
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* NIRMAAN */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 53.72 + '%',
                      top: 61.38 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  NIRMAAN
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* GENESIS */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 36.59 + '%',
                      top: 29.81 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  GENESIS
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* OLIGOPOLY */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 50.06 + '%',
                      top: 86.3 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  OLIGOPOLY
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* MONOPOLY */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 56.19 + '%',
                      top: 86.33 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  MONOPOLY
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* ROBOMANIA */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 64.54 + '%',
                      top: 27.06 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  ROBOMANIA
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* AERODYNAMIX */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 80.19 + '%',
                      top: 46.85 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  AERODYNAMIX
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* ASTROWING */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 71.57 + '%',
                      top: 29.81 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  ASTROWING
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* KREEDOMANIA */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 58.6 + '%',
                      top: 12.34 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  KREEDOMANIA
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>

              {/* GNOSIOMANIA */}
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help"
                    style={{
                      left: 25.88 + '%',
                      top: 50.81 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  GNOSIOMANIA
                  <Tooltip.Arrow offset={10} height={6} width={10} />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </>
        )}
        <img
          src={require('../images/cross-icon.png')}
          className="absolute cursor-pointer right-4 top-4"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

MiniMap.propTypes = {
  playerPosition: {
    x: PropTypes.number,
    y: PropTypes.number,
    rot: PropTypes.number
  },
  teleport: PropTypes.func.isRequired,
  showMap: PropTypes.bool.isRequired,
  setShowMap: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof MiniMap.propTypes>;

export default MiniMap;
