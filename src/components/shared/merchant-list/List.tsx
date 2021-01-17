import React from "react";
import styled from "styled-components";
import { Merchant } from "../../../Types/shared";
import Text from "../Text";
import ListItem from "./ListItem";

type ListProps = {
  merchants: Merchant[];
  isBill: boolean;
  handleBillChange: (isBill: boolean, merchantId: string) => void;
};

const StyledList = styled.ul`
  padding: 10px;
  list-style-type: none;
`;

export default function List({
  merchants,
  isBill,
  handleBillChange,
}: ListProps) {
  if (merchants.length === 0) {
    return <Text size="lg">Nothing to see here!</Text>;
  }

  return (
    <StyledList>
      {merchants.map((merchant) => {
        return (
          <ListItem
            key={merchant.id}
            isBill={isBill}
            merchant={merchant}
            handleBillChange={handleBillChange}
          />
        );
      })}
    </StyledList>
  );
}
