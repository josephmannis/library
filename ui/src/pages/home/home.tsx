import { Box, Card, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Card as CardType } from "../../../../shared/types";
import { useCollectionApi } from "../../api/use-cards";
import { CardList } from "../../components/card-list";
import { CardSearch } from "../../components/card-search";

export function Home() {
  const [results, setResults] = useState<CardType[]>([]);
  const cards = useCollectionApi();

  // useEffect(() => {
  //   async function get() {
  //     return await cards.getCards(0);
  //   }
  //   get().then((r) => setResults(r));
  // }, []);

  function onSearch(query: string) {
    if (query !== "") {
      cards.searchCards(0, query).then((r) => setResults(r));
    } else {
      setResults([]);
    }
  }

  return (
    <Flex
      w="100%"
      justifyContent="center"
      h="100%"
      align="center"
      padding={12}
      backgroundImage={`${process.env.PUBLIC_URL}/bg.jpeg`}
      backgroundSize="cover"
    >
      <Flex w="80%" direction="column">
        <Box mb={4}>
          <CardSearch onChange={onSearch} />
        </Box>
        {results.length > 0 && (
          <Card
            transition="all"
            animation="5s linear"
            overflow="scroll"
            maxHeight="600px"
          >
            <CardList cards={results} />
          </Card>
        )}
      </Flex>
    </Flex>
  );
}
