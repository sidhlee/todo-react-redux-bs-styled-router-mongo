import "./App.css";

import React from "react";

import Container from "react-bootstrap/Container";

import Toolbar from "./components/Navbar";
import AddTodo from "./containers/AddTodo";
import SetCurrentFilter from "./containers/SetCurrentFilter";
import FilterTodos from "./containers/FilterTodos";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Container>
        <AddTodo />
        <SetCurrentFilter />
        <FilterTodos />
      </Container>
    </div>
  );
}

export default App;
