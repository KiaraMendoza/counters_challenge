import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./App.css";

export function Counter(props: {
  value: number;
  counters: { id: number; value: number }[];
  setTotalCount: Dispatch<SetStateAction<number>>;
}) {
  const { value, setTotalCount, counters } = props;
  const [count, setCount] = useState<number>(value);

  const updateCounter = (newValue: number) => {
    setCount((prev) => (prev += newValue));
    setTotalCount((prev: any) => (prev += newValue));
  };

  useEffect(() => {
    setCount(value);
  }, [value, counters]);

  return (
    <div className="counter">
      <div className="counter__buttons">
        <button className="subtract-button" onClick={() => updateCounter(-1)}>
          -
        </button>
        <b className="counter__count">{count}</b>
        <button className="add-button" onClick={() => updateCounter(1)}>
          +
        </button>
      </div>
    </div>
  );
}

export function InitialValueUpdater({
  newValueInput,
  setNewValueInput,
  setNewInitialValue,
}: {
  newValueInput: number;
  setNewValueInput: Dispatch<SetStateAction<number>>;
  setNewInitialValue: () => void;
}) {
  return (
    <div>
      <p>Change counter's initial value:</p>
      <input
        onChange={(e) => {
          setNewValueInput(parseFloat(e.target.value));
        }}
        value={newValueInput}
        type="number"
      />
      <button onClick={setNewInitialValue}>Apply</button>
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
  const [counters, setCounters] =
    useState<{ id: number; value: number }[]>(data);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [newValueInput, setNewValueInput] = useState<number>(0);

  const setNewInitialValue = () => {
    setCounters((prev) =>
      prev.map((_counter) => ({ ..._counter, value: newValueInput })),
    );
  };

  useEffect(() => {
    setTotalCount(
      counters
        .map(({ value }) => value)
        .reduce((_valueCurr, _valueAcc) => _valueCurr + _valueAcc),
    );
  }, [counters]);

  return (
    <div className="counter-challenge">
      <div className="counters">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            counters={counters}
            setTotalCount={setTotalCount}
          />
        ))}
      </div>
      <div className="total-count">
        <b>Total count: {totalCount}</b>
      </div>
      <InitialValueUpdater
        newValueInput={newValueInput}
        setNewValueInput={setNewValueInput}
        setNewInitialValue={setNewInitialValue}
      />
    </div>
  );
}

export default App;
