import styled from "styled-components";
import { StyleConstants } from "../../shared/constants";

export default styled.button`
  border: 1px solid ${StyleConstants.colors.gray};
  border-radius: 5px;
  background: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${StyleConstants.colors.blue};
  }
`;
