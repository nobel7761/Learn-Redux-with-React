import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

const Counter = ({ countValue, incrementHandler, decrementHandler, id }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{countValue}</div>
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
  //! এখানে state টা মূলত react-redux ই এনে দিচ্ছে।
  console.log(ownProps);
  return {
    countValue: state.counterReducer.value, //! এখানে countValue এর নাম নিজের ইচ্ছামত দিতে পারবো। এই একই নামটা আমরা মূলত props আকারে যেই component টা connect function এর সাথে দিয়েছি সেখানে পাঠাবো।
  };
};

const mapDispatchToProps = (dispatch) => {
  //! এখানে dispatch টা মূলত react-redux ই এনে দিচ্ছে।
  return {
    incrementHandler: (value) => dispatch(increment(value)), //! এখানে incrementHandler এর নাম নিজের ইচ্ছামত দিতে পারবো। এই একই নামটা আমরা মূলত props আকারে যেই component টা connect function এর সাথে দিয়েছি সেখানে পাঠাবো।
    decrementHandler: (value) => dispatch(decrement(value)), //! এখানে decrementHandler এর নাম নিজের ইচ্ছামত দিতে পারবো। এই একই নামটা আমরা মূলত props আকারে যেই component টা connect function এর সাথে দিয়েছি সেখানে পাঠাবো।
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
