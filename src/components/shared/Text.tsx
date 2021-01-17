import React from "react";
import styled, { css } from "styled-components";

type Size = "sm" | "md" | "lg";

type TextProps = {
  children: React.ReactNode;
  size: Size;
};

type StyledTextProps = {
  size: Size;
};

const sizeToPx: { [key: string]: number } = {
  sm: 14,
  md: 20,
  lg: 24,
};

const StyledText = styled.p<StyledTextProps>`
  margin: 0;

  ${(props) =>
    props.size &&
    css`
      font-size: ${sizeToPx[props.size]}px;
    `}
`;

export default function Text({ children, size }: TextProps) {
  return <StyledText size={size}>{children}</StyledText>;
}
