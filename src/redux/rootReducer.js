import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  dynamicCounterReducer: dynamicCounterReducer,
});

export default rootReducer;
