const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

//Redux step 1: declaring initialState
const initialState = {
  value: 0,
};

//Redux step 2: declaring reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return { ...state };
  }
};

//Redux step 3: creating store
const store = Redux.createStore(counterReducer);

//Redux step 4: action dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(10));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(5));
});

const render = () => {
  const latestState = store.getState();
  counterEl.innerText = latestState.value;
};

//for showing default data manually
render();

//Redux step 5: subscribe
store.subscribe(render);
