import React from 'react';

const Pattern = () => {
  return (
    <>
      {/* left pattern */}
      <div className="absolute left-0 hidden rotate-45 bg w-100 h-100 lg:block top-1/2">
        <span className="w-12 h-12 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-white">
          &nbsp;
        </span>
        <span className="w-28 h-28 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white">
          &nbsp;
        </span>
        <span className="w-48 h-48 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white">
          &nbsp;
        </span>
      </div>

      {/* right pattern */}
      <div className="absolute right-0 hidden rotate-45 w-100 h-100 lg:block top-1/2">
        <span className="w-12 h-12 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-white">
          &nbsp;
        </span>
        <span className="w-28 h-28 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white">
          &nbsp;
        </span>
        <span className="w-48 h-48 border-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white">
          &nbsp;
        </span>
      </div>
    </>
  );
};

export default Pattern;
