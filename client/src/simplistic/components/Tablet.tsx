import React, { ReactChildren, ReactElement, ReactNode } from 'react';
import './common.css';

/* eslint-disable */
interface RequireType {
  children: ReactChildren | ReactNode | ReactElement;
  bgrd: string;
  onBackPress: (e: any) => void;
  onHomePress: (e: any) => void;
  onCrossPress: (e: any) => void;
}
/* eslint-enable */

function Tablet({ children, bgrd, onBackPress, onCrossPress, onHomePress }: RequireType) {
  function LoadingRender() {
    return (
      <div className="bg-zinc-900 w-screen h-screen p-6">
        <div className="bg-cover bg-no-repeat bg-bottom w-full h-full rounded-lg bg-blue-800">
          <header style={{ height: '4%' }} className="flex justify-center">
            <div className="bg-zinc-900 w-32 rounded-b-3xl flex justify-center items-center">
              <div className="rounded-full bg-neutral-800 w-5 h-5 mr-2 flex justify-center items-center">
                <div className="rounded-full bg-black w-3 h-3"></div>
              </div>
              <div className="rounded-full bg-white w-2 h-2"></div>
            </div>
          </header>
          <main
            className="overflow-scroll no-scroll text-center flex justify-center items-center"
            style={{ height: '90%' }}>
            <svg
              className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="text-white font-black text-3xl">Loading ....</span>
          </main>
          <header style={{ height: '6%' }} className="flex justify-center">
            <div className="bg-zinc-900 w-3/4 rounded-t-3xl flex justify-around items-center max-w-md">
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
    );
  }

  return (
    <>
      <div className="tab-loading">{LoadingRender()}</div>
      <div className="bg-zinc-900 w-screen h-screen p-6">
        <div
          className="bg-cover bg-no-repeat bg-bottom w-full h-full rounded-lg"
          style={{ backgroundImage: `url(${bgrd})` }}>
          <header style={{ height: '4%' }} className="flex justify-center">
            <div className="bg-zinc-900 w-32 rounded-b-3xl flex justify-center items-center">
              <div className="rounded-full bg-neutral-800 w-5 h-5 mr-2 flex justify-center items-center">
                <div className="rounded-full bg-black w-3 h-3"></div>
              </div>
              <div className="rounded-full bg-white w-2 h-2"></div>
            </div>
          </header>
          <main className="overflow-scroll no-scroll" style={{ height: '90%' }}>
            <>{children}</>
          </main>
          <header style={{ height: '6%' }} className="flex justify-center">
            <div className="bg-zinc-900 w-3/4 rounded-t-3xl flex justify-around items-center max-w-md">
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
