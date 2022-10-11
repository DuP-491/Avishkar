import React, { ReactChildren, ReactElement, ReactNode } from 'react';
import './common.css';

interface RequireType {
  children: ReactChildren | ReactNode | ReactElement;
  bgrd: string;
  onBackPress: (e: any) => void;
  onHomePress: (e: any) => void;
  onCrossPress: (e: any) => void;
}

function Tablet({ children, bgrd, onBackPress, onCrossPress, onHomePress }: RequireType) {
  return (
    <>
      <div className="bg-zinc-800 w-screen h-screen p-6">
        <div
          className="bg-cover bg-no-repeat bg-bottom w-full h-full rounded-lg"
          style={{ backgroundImage: `url(${bgrd})` }}>
          <header style={{ height: '4%' }} className="flex justify-center">
            <div className="bg-zinc-800 w-32 rounded-b-3xl flex justify-center items-center">
              <div className="rounded-full bg-zinc-900 w-4 h-4 mr-2 flex justify-center items-center">
                <div className="rounded-full bg-black w-2 h-2"></div>
              </div>
              <div className="rounded-full bg-white w-2 h-2"></div>
            </div>
          </header>
          <main className="overflow-scroll no-scroll" style={{ height: '90%' }}>
            <>{children}</>
          </main>
          <header style={{ height: '6%' }} className="flex justify-center">
            <div className="bg-zinc-800 w-3/4 rounded-t-3xl flex justify-around items-center max-w-md">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={onBackPress}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={onHomePress}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={onCrossPress}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}

export default Tablet;
