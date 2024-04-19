import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      
        <h1>Akash Singh</h1>
        <h2>Counted Value: {counter}</h2>
		<div className="counter-container">
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
    </>
  );
}

export default Counter;
