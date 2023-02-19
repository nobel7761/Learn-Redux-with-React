const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//Redux step 1: declaring initialState
const initialState = {
  value: 0,
};

//Redux step 2: declaring reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return { ...state };
  }
};

//Redux step 3: creating store
const store = Redux.createStore(counterReducer);

//Redux step 4: action dispatch
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});

const render = () => {
  const latestState = store.getState();
  counterEl.innerText = latestState.value;
};

//for showing default data manually
render();

//Redux step 5: subscribe
store.subscribe(render);
