import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const StyledListGroupItem = styled(ListGroup.Item)`
  text-decoration: ${props => {
    return props.completed &&
      props.currentFilter !== "SHOW_COMPLETED"
      ? "line-through"
      : "none";
  }};
  color: ${props => (props.completed ? "gray" : null)};
`;

const Todo = props => (
  <StyledListGroupItem {...props} onClick={props.clicked}>
    {props.children}
  </StyledListGroupItem>
);

export default Todo;
