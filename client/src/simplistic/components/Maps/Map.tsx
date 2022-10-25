/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as Tooltip from '@radix-ui/react-tooltip';
function Map(props: Props) {
  const { showMap, setShowMap } = props;
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
        onClick={handleClick}
        onKeyDown={(event: any) => {
          if (event.key === 'Escape') {
            handleClick();
          }
        }}></div>
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
                    <div className="">GNOTALKS</div>
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
  showMap: PropTypes.bool.isRequired,
  setShowMap: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Map.propTypes>;

export default Map;
