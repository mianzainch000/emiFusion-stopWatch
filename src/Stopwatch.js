import React, { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [Start, setStart] = useState(false);
  const [Sec, setSec] = useState("0");
  const [Mint, setMint] = useState("0");
  const [Hour, setHour] = useState("0");
  useEffect(() => {
    let interval;
    if (Start) {
      interval = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
        if (Sec > 59) {
          setMint((prevMint) => prevMint + 1);
          setSec(0);
        }
        if (Mint > 59) {
          setHour((prevHour) => prevHour + 1);
          setMint(0);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [Start, Sec, Mint, Hour]);

  const startHandler = () => {
    setStart(true);
  };
  const stopHandler = () => {
    setStart(false);
  };
  const resetHandler = () => {
    setStart(false);
    setSec(0);
    setMint(0);
    setHour(0);
  };
  const stopWatchTime = `${Hour < 10 ? "0" + Hour : Hour} : ${
    Mint < 10 ? "0" + Mint : Mint
  } : ${Sec < 10 ? "0" + Sec : Sec}`;
  return (
    <div>
      <div class="stopwatchContainer">
        <div class="stopwatch">
          <span class="digits">{stopWatchTime}</span>
          <div class="button">
            <button class="btn start" onClick={startHandler}>
              Start
            </button>
            <button class="btn stop" onClick={stopHandler}>
              Stop
            </button>
            <button class="btn reset" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
