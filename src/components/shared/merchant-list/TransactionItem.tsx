import React, { memo } from "react";
import styled from "styled-components";
import { Transaction } from "../../../Types/shared";
import Text from "../Text";

type TransactionItemProps = {
  transaction: Transaction;
};

const StyledTransaction = styled.div`
  margin: 5px 10px;
`;

function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <StyledTransaction>
      <Text size="sm">
        - Spent £{transaction.amount} on {transaction.date}
      </Text>
    </StyledTransaction>
  );
}

export default memo(TransactionItem);
