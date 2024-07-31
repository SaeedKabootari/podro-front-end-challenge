import { useState, useEffect } from "react";

const Countdown = (props) => {
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (props.timeZero !== false) {
      setCount(20);
    }
  }, [props.sendAgain]);

  useEffect(() => {
    if (count === 0) {
      props.setTimeZero(true);
    }
    const timeInterval = setInterval(() => {
      if (count > 0) {
        setCount((prevState) => prevState - 1);
      }
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [count, props.sendAgain]);

  return <div>{count}</div>;
};

export default Countdown;
