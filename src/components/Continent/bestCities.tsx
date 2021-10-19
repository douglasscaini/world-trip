import { Flex, Text } from "@chakra-ui/react";
import Cities from "../../components/Cities";

import { ContinentProps } from "../../pages/continents/[slug]";

export default function BestCities({ continent }: ContinentProps) {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" direction="column" mt={["8", "20"]}>
      <Text fontSize={["2xl", "4xl"]} fontWeight="500" pl={["4", "0"]}>
        As melhores cidades
      </Text>

      <Cities continent={continent} />
    </Flex>
  );
}
