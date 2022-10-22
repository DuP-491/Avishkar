import React from 'react';

const Pattern = () => {
  return (
    <>
      {/* left pattern */}
      <div className="absolute left-0 hidden rotate-45 bg-yellow-500 w-100 h-100 md:block top-1/2">
        <span className="w-12 h-12 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          &nbsp;
        </span>
        <span className="w-28 h-28 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          &nbsp;
        </span>
        <span className="w-48 h-48 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          &nbsp;
        </span>
      </div>

      {/* right pattern */}
      <div className="absolute right-0 hidden rotate-45 bg-yellow-500 md:block w-100 h-100 top-1/2">
        <span className="w-12 h-12 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          &nbsp;
        </span>
        <span className="w-28 h-28 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          &nbsp;
        </span>
        <span className="w-48 h-48 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          &nbsp;
        </span>
      </div>
    </>
  );
};

export default Pattern;
