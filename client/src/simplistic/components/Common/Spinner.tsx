import React from 'react';
interface SpinnerPropType {
  displayTxt: string;
}
const Spinner = ({ displayTxt }: SpinnerPropType) => {
  return (
    <div className="flex justify-center mx-auto space-x-2">
      <span className="flex-grow-0 inline w-5 h-5 border-4 border-gray-500 rounded-full border-t-gray-200 animate-spin"></span>
      <p>{displayTxt}</p>
    </div>
  );
};

export default Spinner;
