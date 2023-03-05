const { createStore, applyMiddleware } = require("redux");
const {
  delayActionMiddleware,
  fetchTodosMiddleware,
} = require("./middlewares");

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodos":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case "todos/loadedTodos":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      break;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(delayActionMiddleware, fetchTodosMiddleware)
);

store.subscribe(() => {
  console.log(store.getState());
});

/* store.dispatch({
  type: "todos/addTodos",
  payload: "Nobel, you have successfully completed the practice task!",
}); */

store.dispatch({
  type: "todos/fetchTodos",
});
