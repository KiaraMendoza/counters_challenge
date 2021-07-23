import React, { useState } from "react";
import "./App.css";

function Counter(props: { value: number }) {
  let { value } = props;
  const [count, setCount] = useState(value);

  const incrementCounter = (newValue: number) => {
    setCount((prev) => (prev += newValue));
  };

  const decrementCounter = (newValue: number) => {
    setCount((prev) => (prev += newValue));
  };

  return (
    <div className="counter">
      <div className="counter__buttons">
        <button
          className="subtract-button"
          onClick={() => decrementCounter(-1)}>
          -
        </button>
        <b className="counter__count">{count}</b>
        <button className="add-button" onClick={() => incrementCounter(1)}>
          +
        </button>
      </div>
    </div>
  );
}

function App() {
  const data = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ];

  return (
    <div className="counter-challenge">
      <div className="counters">
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    </div>
  );
}

export default App;
