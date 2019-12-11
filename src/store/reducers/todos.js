import { actionTypes } from "../actions";

const defaultState = [];

const addTodo = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: action.completed
    }
  ];
};

const toggleTodo = (state, action) => {
  return state.map(todo => {
    return todo.id === action.id
      ? { ...todo, completed: !todo.completed }
      : todo;
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    case actionTypes.TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};
