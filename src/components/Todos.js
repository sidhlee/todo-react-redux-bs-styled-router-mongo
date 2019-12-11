import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Todo from "./Todo";

// const todosMock = [
//   { id: 0, completed: false, text: "todo" },
//   { id: 1, completed: false, text: "todo" },
//   { id: 2, completed: false, text: "todo" }
// ];

const Todos = ({
  toggleTodo,
  filteredTodos,
  currentFilter
}) => {
  const mappedTodos = filteredTodos.map(todo => (
    <Todo
      key={todo.id}
      completed={todo.completed}
      clicked={() => toggleTodo(todo.id)}
      currentFilter={currentFilter}
    >
      {todo.text}
    </Todo>
  ));
  return (
    <ListGroup variant="flush">{mappedTodos}</ListGroup>
  );
};

export default Todos;
