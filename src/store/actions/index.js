export const filterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  SET_FILTER: "SET_FILTER",
  TOGGLE_TODO: "TOGGLE_TODO"
};

let nextTodoId = 0;
export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  text,
  id: nextTodoId++,
  completed: false
});

export const setCurrentFilter = filter => ({
  type: actionTypes.SET_FILTER,
  filter
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id
});
