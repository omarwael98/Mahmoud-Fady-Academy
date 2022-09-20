import React, { useState, useRef, useEffect } from "react";

const getTimeRemaining = (deadline) => {
  const total = Date.parse(deadline) - Date.parse(new Date());

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / 1000 / 60 / 60 / 24);

  return { total, days, hours, minutes, seconds };
};

const CountDownTimer = (props) => {
  const Ref = useRef(null);

  const timeInit = () => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(
      props.deadline
    );
    if (total >= 0) {
      return (
        (days > 9 ? days : "0" + days) +
        " : " +
        (hours > 9 ? hours : "0" + hours) +
        " : " +
        (minutes > 9 ? minutes : "0" + minutes) +
        " : " +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    return "00 : 00 : 00 : 00";
  };

  const [timer, setTimer] = useState(timeInit());

  const startTimer = () => {
    setTimer(timeInit());
  };

  const clearTimer = () => {
    if (Ref.current) {
      clearInterval(Ref.current);
    }
    const id = setInterval(() => {
      startTimer();
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    clearTimer();
  }, []);

  return <div className="bold fs-1">{timer}</div>;
};

export default CountDownTimer;
