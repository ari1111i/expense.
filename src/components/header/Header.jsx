import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/button/Button";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <StyledHeader>
      {isLoggedIn && <Button>Expenses</Button>}
      {isLoggedIn && <Button>Users</Button>}
      {isLoggedIn && (
        <Button onClick={onLogout} bgColor={"dark"}>
          Logout
        </Button>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  padding: 1rem;
  background-color: #c2b4f2;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  min-height: 5rem;
`;

export default Header;
