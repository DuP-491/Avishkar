import React, { useState } from 'react';

/* eslint-disable */
interface HomePagePropType {
  onRedirectPress: (e: any) => void;
}
/* eslint-enable */

function HomePage({ onRedirectPress }: HomePagePropType) {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div
        style={{
          background: 'url(https://i.imgur.com/P1ys3d9.jpg)',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}
        className="h-screen w-screen bg-cover bg-bottom">
        <nav className="w-full">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <button>
                  <h2 className="text-2xl font-bold text-white">Pro?</h2>
                </button>
                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none "
                    onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 "
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}>
                <ul className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-gray-600 hover:text-blue-600">
                    <span
                      className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                      onClick={onRedirectPress}
                      id="Events">
                      <span
                        className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                        id="Events"></span>
                      <span className="relative group-hover:text-white" id="Events">
                        Events
                      </span>
                    </span>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <span
                      className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                      onClick={onRedirectPress}
                      id="Team">
                      <span
                        className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                        id="Events"></span>
                      <span className="relative group-hover:text-white" id="Events">
                        Team Avishkar
                      </span>
                    </span>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <span
                      className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                      onClick={onRedirectPress}
                      id="FAQ">
                      <span
                        className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                        id="Events"></span>
                      <span className="relative group-hover:text-white" id="Events">
                        FAQ
                      </span>
                    </span>
                  </li>
                  <li className="text-gray-600 hover:text-blue-600">
                    <span
                      className="px-5 py-2.5 w-full md:w-fit relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                      onClick={onRedirectPress}
                      id="Sponsors">
                      <span
                        className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                        id="Events"></span>
                      <span className="relative group-hover:text-white" id="Events">
                        Sponsors
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HomePage;
