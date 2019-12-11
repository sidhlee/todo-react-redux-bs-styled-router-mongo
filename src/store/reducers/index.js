import { combineReducers } from "redux";
import todos from "./todos";
import currentFilter from "./currentFilter";

export default combineReducers({
  todos,
  currentFilter
});
