import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
  const navigator = useNavigate();
  const [timer, setTimer] = React.useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (timer <= 0) {
      navigator('/');
    }
  }, [timer]);
  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 w-screen h-screen overflow-hidden">
      <span className="text-white text-3xl">
        Please open page on desktop for the complete gaming experience
      </span>
      <span className="text-white text-xl">Redirecting in {timer} seconds...</span>
      <span className="text-white text-sm">
        <a href="/">Redirect now</a>
      </span>
    </div>
  );
}

export default Redirect;
