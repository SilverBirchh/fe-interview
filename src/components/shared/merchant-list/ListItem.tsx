import React, { useState, memo } from "react";
import styled from "styled-components";
import { StyleConstants } from "../../../shared/constants";
import { Merchant } from "../../../Types/shared";
import Button from "../Button";
import Divider from "../Divider";
import { SpaceBetween, Flex } from "../Flex";
import Text from "../Text";
import TransactionItem from "./TransactionItem";

type ListItemProps = {
  merchant: Merchant;
  isBill: boolean;
  handleBillChange: (isBill: boolean, merchantId: string) => void;
};

const StyledListItem = styled.li`
  border: 1px solid ${StyleConstants.colors.blue};
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px;
`;

function ListItem({ merchant, isBill, handleBillChange }: ListItemProps) {
  const [showTransactions, setShowTransactions] = useState(false);

  return (
    <StyledListItem>
      <Text size="md">{merchant.name}</Text>
      <SpaceBetween>
        <Text size="sm">
          Number of transactions: {merchant.transactions.length}
        </Text>
        <Flex>
          <Button onClick={() => setShowTransactions(!showTransactions)}>
            {showTransactions ? "Hide" : "Show"} Transactions
          </Button>
          <Divider width={10} />
          <Button onClick={() => handleBillChange(!isBill, merchant.id)}>
            {isBill ? "Remove" : "Add as"} Bill
          </Button>
        </Flex>
      </SpaceBetween>
      {showTransactions &&
        merchant.transactions.map((transaction) => {
          return (
            <TransactionItem key={transaction.id} transaction={transaction} />
          );
        })}
    </StyledListItem>
  );
}

export default memo(ListItem);
