import React, { useCallback, useEffect, useRef, useState } from "react";

const SampleHook = () => {
  const [cnt, setCnt] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCnt(cnt + 1);
  });

  useEffect(() => {
    console.log(spanRef.current.innerHTML);
    console.log(`mounted & updated : ${cnt}`);
    console.log("haha");
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{cnt}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SampleHook;
