import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div class="flex space-x-3">
        <Button handler={incrementHandler}>Increment</Button>
        <Button handler={decrementHandler}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
