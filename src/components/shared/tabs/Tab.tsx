import React from "react";
import styled, { css } from "styled-components";
import { StyleConstants } from "../../../shared/constants";
import Text from "../Text";

type TabProps = {
  route: string;
  name: string;
  isSelected: boolean;
  onClick: (route: string) => void;
};

type StyledTabProps = {
  isSelected: boolean;
  onClick: (route: string) => void;
};

const StyledTab = styled.button<StyledTabProps>`
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 300ms;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${StyleConstants.colors.yellow};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    `}
`;

export default function Tab({ route, name, isSelected, onClick }: TabProps) {
  return (
    <StyledTab onClick={() => onClick(route)} isSelected={isSelected}>
      <Text size="md">{name}</Text>
    </StyledTab>
  );
}
