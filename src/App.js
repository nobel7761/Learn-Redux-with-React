import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const App = () => {
  const [state, setState] = useState(initialState);

  const totalCount = state.reduce((total, counter) => total + counter.count, 0);

  const increment = (id) => {
    const updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      }
      return { ...counter };
    });

    setState(updatedState);
  };

  const decrement = (id) => {
    const updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      }
      return { ...counter };
    });

    setState(updatedState);
  };

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div class="max-w-md mx-auto mt-10 space-y-5">
        {state.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.count}
            incrementHandler={() => increment(counter.id)}
            decrementHandler={() => decrement(counter.id)}
          />
        ))}

        <Stats count={totalCount} />
      </div>
    </div>
  );
};

export default App;
