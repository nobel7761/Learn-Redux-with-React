import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState = {
  value: 120,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload.value,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload.value,
      };

    default:
      return { ...state };
  }
};

export default dynamicCounterReducer;
