const fetch = require("node-fetch");

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/addTodos") {
    console.log("I am delaying you!");

    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodos") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();

    store.dispatch({
      type: "todos/loadedTodos",
      payload: todos,
    });

    console.log(`Total Number of Todos: ${store.getState().todos.length}`);
    return;
  }

  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
};
