import { Flex } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <Flex w="100%" mt={["5", "10"]} flexWrap="wrap" justify={["center", "space-between"]}>
      <City name="Londres" country="Reino Unido" translateCountry="united_kingdom" />
      <City name="Paris" country="França" translateCountry="france" />
      <City name="Roma" country="Itália" translateCountry="italy" />
      <City name="Praga" country="República Tcheca" translateCountry="czech_republic" />
      <City name="Lisboa" country="Portugal" translateCountry="portugal" />
    </Flex>
  );
}
