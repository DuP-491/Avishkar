import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { TELEPORT_LOCATIONS } from '../game/consts';
import * as Tooltip from '@radix-ui/react-tooltip';
function Map(props: Props) {
  const { playerPosition, teleport, showMap, setShowMap } = props;
  const baseDiv = useRef<HTMLDivElement>(null);
  const [showMarks, setShowMarks] = useState(false);
  const eventQuotes = [
    'A quest for top notch programmers and hackers.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.',
    'lorem ipsum dolor sit amet.'
  ];

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

            <Tooltip.Provider delayDuration={500} skipDelayDuration={400}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 40.15 + '%',
                      top: 66.13 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">CYBERQUEST</div>
                    <div className="text-blue-900">{eventQuotes[0]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 55.779999999999994 + '%',
                      top: 34.41 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ELECTROMANIA</div>
                    <div className="text-blue-900">{eventQuotes[1]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 45.489999999999995 + '%',
                      top: 22.6 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">POWERSURGE</div>
                    <div className="text-blue-900">{eventQuotes[2]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 41.01 + '%',
                      top: 30.849999999999998 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">RASAYANS</div>
                    <div className="text-blue-900">{eventQuotes[3]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 53.51 + '%',
                      top: 58.769999999999996 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">MECHROCOSM</div>
                    <div className="text-blue-900">{eventQuotes[4]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 61.089999999999996 + '%',
                      top: 26.67 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">NIRMAAN</div>
                    <div className="text-blue-900">{eventQuotes[5]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 35.5 + '%',
                      top: 7.5 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">GENESIS</div>
                    <div className="text-blue-900">{eventQuotes[6]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 54.419999999999995 + '%',
                      top: 81.59 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">OLIGOPOLY</div>
                    <div className="text-blue-900">{eventQuotes[7]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 50.26 + '%',
                      top: 84.08 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">MONOPOLY</div>
                    <div className="text-blue-900">{eventQuotes[8]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 69.11 + '%',
                      top: 63.959999999999994 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ROBOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[9]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 81.65 + '%',
                      top: 45.839999999999996 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">AERODYNAMIX</div>
                    <div className="text-blue-900">{eventQuotes[10]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 67.18 + '%',
                      top: 72.97 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">ASTROWING</div>
                    <div className="text-blue-900">{eventQuotes[11]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 57.4 + '%',
                      top: 3.59 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">KREEDOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[12]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
                </Tooltip.Content>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <img
                    src={require('../images/tablet-icon.png')}
                    className="absolute w-4 h-4 cursor-help animate-bounce"
                    style={{
                      left: 22.61 + '%',
                      top: 48.91 + '%'
                    }}
                  />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <div className="bg-blue-200 p-2 text-center border-blue-200 rounded border-[1px] font-serif">
                    <div className="">GNOSIOMANIA</div>
                    <div className="text-blue-900">{eventQuotes[13]}</div>
                  </div>
                  {/* <Tooltip.Arrow height={6} width={10} /> */}
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

Map.propTypes = {
  playerPosition: {
    x: PropTypes.number,
    y: PropTypes.number,
    rot: PropTypes.number
  },
  teleport: PropTypes.func.isRequired,
  showMap: PropTypes.bool.isRequired,
  setShowMap: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Map.propTypes>;

export default Map;
