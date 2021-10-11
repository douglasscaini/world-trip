import { Flex, Icon, Text, Link, Grid } from "@chakra-ui/react";
import Header from "../../components/Header";
import Cities from "../../components/Cities";
import BoxInfo from "../../components/BoxInfo";
import BannerCountry from "../../components/BannerCountry";

import { IoChevronBackOutline } from "react-icons/io5";

export default function Continent() {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <Flex w="100%" maxWidth={1120} mx="auto" align="center" pl={["4", "0"]} pr={["4", "0"]}>
        <Link href="/">
          <Icon as={IoChevronBackOutline} w={["4", "6"]} h={["4", "6"]} />
        </Link>

        <Header />
      </Flex>

      <BannerCountry />

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
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
          ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
          águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <Flex align="center" justify="space-evenly">
          <BoxInfo number={50} text="países" />
          <BoxInfo number={60} text="línguas" />
          <BoxInfo number={27} text="cidades +100" cityInfo={true} />
        </Flex>
      </Grid>

      <Flex w="100%" maxWidth={1120} mx="auto" direction="column" mt={["8", "20"]}>
        <Text fontSize={["2xl", "4xl"]} fontWeight="500" pl={["4", "0"]}>
          Cidades +100
        </Text>

        <Cities />
      </Flex>
    </Flex>
  );
}
