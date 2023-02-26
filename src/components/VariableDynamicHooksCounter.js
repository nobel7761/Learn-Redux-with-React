import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import {
  increment as dynamicIncrement,
  decrement as dynamicDecrement,
} from "../redux/dynamicCounter/actionCreators";

const VariableDynamicHooksCounter = ({
  value,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrementHandler}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: ownProps.dynamic
      ? state.dynamicCounterReducer.value
      : state.counterReducer.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementHandler: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrement(5))
      : dispatch(increment()),
    decrementHandler: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(2))
      : dispatch(decrement()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VariableDynamicHooksCounter);
