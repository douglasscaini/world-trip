import { Flex } from "@chakra-ui/react";
import City from "./City";

import { ContinentProps } from "../../pages/continents/[slug]";

export default function Cities({ continent }: ContinentProps) {
  return (
    <Flex w="100%" mt={["5", "10"]} flexWrap="wrap" justify={["center", "space-between"]}>
      {continent.bestCities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          cityPicture={city.cityPicture}
          country={city.country}
          countryPicture={city.countryPicture}
        />
      ))}
    </Flex>
  );
}
