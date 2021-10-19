import { Flex, Grid, Text } from "@chakra-ui/react";
import BoxInfo from "../../components/BoxInfo";

import { ContinentProps } from "../../pages/continents/[slug]";

export default function InfoContinent({ continent }: ContinentProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr"]}
      templateRows={["1fr 1fr", "1fr"]}
      maxWidth={1120}
      mx="auto"
      justify="space-between"
      mt={["6", "20"]}
      pl={["4", "0"]}
      pr={["4", "0"]}
    >
      <Text fontSize={["sm", "2xl"]} textAlign="justify">
        {continent.description}
      </Text>

      <Flex align="center" justify="space-evenly">
        <BoxInfo text={continent.countries} details="países" />
        <BoxInfo text={continent.languages} details="línguas" />
        <BoxInfo
          text={continent.population}
          details="habitantes"
          highlights={continent.highlights}
        />
      </Flex>
    </Grid>
  );
}
