import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Routes, StyleConstants } from "../../../shared/constants";
import Tab from "./Tab";

const StyledTabs = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: space-around;
  height: 50px;
  background-color: ${StyleConstants.colors.gray};
`;

export default function Tabs() {
  const { pathname } = useLocation();

  const { push } = useHistory();

  const handleClick = useCallback(
    (route) => {
      push(route);
    },
    [push]
  );

  return (
    <StyledTabs>
      {Routes.map(({ route, name }) => {
        return (
          <Tab
            onClick={handleClick}
            key={route}
            route={route}
            name={name}
            isSelected={route === pathname}
          />
        );
      })}
    </StyledTabs>
  );
}
