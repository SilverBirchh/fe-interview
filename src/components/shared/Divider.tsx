import React from "react";
import styled, { css } from "styled-components";

type DividerProps = {
  height?: number;
  width?: number;
};

const StyledDivider = styled.div<DividerProps>`
  ${(props) =>
    css`
      height: ${props.height}px;
      width: ${props.width}px;
    `}
`;

export default function Divider({ height = 0, width = 0 }: DividerProps) {
  return <StyledDivider height={height} width={width} />;
}
