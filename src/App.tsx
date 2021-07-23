import React, { useState } from "react";

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
    <div>
      <b>{count}</b>
      <div>
        <button onClick={() => decrementCounter(-1)}>-</button>
        <button onClick={() => incrementCounter(1)}>+</button>
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
    <div>
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </div>
  );
}

export default App;
