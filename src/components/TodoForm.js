import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TodoForm = ({ addTodo }) => {
  let inputNode = null;
  return (
    <Form
      className="mt-3"
      onSubmit={e => {
        e.preventDefault();
        if (!inputNode.value.trim()) return;
        addTodo(inputNode.value);
        inputNode.value = "";
      }}
    >
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          ref={node => (inputNode = node)}
          placeholder="Enter Todo"
        />
      </Form.Group>
      <Button type="submit" block>
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
