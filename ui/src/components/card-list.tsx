import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Card } from "../../../shared/types";

export function CardList(props: { cards: Card[] }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    // <TableContainer h="!00%" overflow="scroll">
    <Table variant="simple" colorScheme="gray" w="100%" h="100%">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Set</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.cards.map((c, i) => {
          return (
            <Tr
              _hover={{ bg: "gray.100" }}
              key={`${c.id}~${i}`}
              onClick={() => window.open(c.scryfallLink, "_blank")}
            >
              <Td>{c.name}</Td>
              <Td>{c.setCode.toUpperCase()}</Td>
              <Td>{formatter.format(c.price)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
    // </TableContainer>
  );
}
