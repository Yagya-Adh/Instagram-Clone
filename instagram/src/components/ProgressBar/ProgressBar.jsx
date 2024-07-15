import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [initial, setInitial] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (isLoading && initial < 100) {
      interval = setInterval(() => {
        setInitial((prev) => Math.min(prev + 1, 100));
      }, 200);
    } else if (initial === 100) {
      clearInterval(interval);
      setIsLoading(false);
    }

    return () => clearInterval(interval);
  }, [isLoading, initial]);

  const handleClick = () => {
    setInitial(0);
    setIsLoading(true);
  };

  return (
    <div className="flex justify-center">
      <div className="p-3 mb-3">
        <h1>ProgressBar</h1>
        <div className="w-[200px] bg-gray-400 p-1 h-12">
          <div
            className={`transition-all ease-in-out duration-700 bg-green-300 h-10`}
            style={{ width: `${initial}%` }}
          ></div>
        </div>
        <button
          className="bg-sky-500 rounded-xl text-white mt-3 w-32 text-xl px-2 py-3"
          onClick={handleClick}
        >
          Load
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
