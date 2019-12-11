import React from "react";
import { ReactComponent as Logo } from "../assets/list.svg";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const StyledLogo = styled(Logo)`
  height: 90%;
  margin-right: 1em;
  fill: white;
`;

const Toolbar = () => (
  <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>
        <StyledLogo
          width="30"
          height="30"
          className="d-inline-block align-top"
          title="Todo App logo"
        />{" "}
        Todo App
      </Navbar.Brand>
    </Navbar>
  </>
);

export default Toolbar;
