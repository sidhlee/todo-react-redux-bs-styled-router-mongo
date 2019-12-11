import { filterTypes, actionTypes } from "../actions";

const defaultState = filterTypes.SHOW_ALL;

const setFilter = (state, action) => action.filter;

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FILTER:
      return setFilter(state, action);
    default:
      return state;
  }
};
