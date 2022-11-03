import React from 'react';

interface CardProps {
  imgsrc: string;
  name: string;
  bgc: string;
  sponsorURL: string;
}

const Card = ({ imgsrc, name, bgc, sponsorURL }: CardProps) => {
  return (
    <a href={sponsorURL} target="_blank" rel="noreferrer">
      <div className="flex flex-col items-center p-4 duration-75 scale-75 sm:p-6 rounded-xl hover:scale-100 hover:shadow-2xl">
        <img
          className="w-full p-4 object-fit rounded-xl"
          src={imgsrc}
          style={{ backgroundColor: bgc }}
        />
        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          {name}
        </h1>
      </div>
    </a>
  );
};

export default Card;
