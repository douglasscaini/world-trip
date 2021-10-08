import { Flex, Icon, Text, Link, Box, Grid, Heading, Tooltip, HStack } from "@chakra-ui/react";
import Header from "../../components/Header";

import { IoChevronBackOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";

export default function Continent() {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <Flex w="100%" maxWidth={1120} mx="auto" align="center" pl={["4", "0"]} pr={["4", "0"]}>
        <Link href="/">
          <Icon as={IoChevronBackOutline} w={["4", "6"]} h={["4", "6"]} />
        </Link>

        <Header />
      </Flex>

      <Flex
        w="100vw"
        h={["150px", "500px"]}
        bgImage="url('/images/europe/home.jpg')"
        bgPosition="100% 100%"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          w="100%"
          maxWidth={1120}
          mx="auto"
          align={["center", "end"]}
          justify={["center", "start"]}
          pb={["0", "12"]}
        >
          <Text fontSize={["2xl", "5xl"]} fontWeight="600" color="gray.150">
            Europa
          </Text>
        </Flex>
      </Flex>

      <Grid
        templateColumns={["", "1fr 1fr"]}
        templateRows={["1fr 1fr", ""]}
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
          <Box align="center">
            <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
              50
            </Heading>
            <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
              países
            </Text>
          </Box>
          <Box align="center">
            <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
              60
            </Heading>
            <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
              línguas
            </Text>
          </Box>
          <Box align="center">
            <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
              27
            </Heading>
            <Flex align="center">
              <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
                cidades +100
              </Text>
              <HStack>
                <Tooltip
                  label="Tirana, Berlim, Astana e mais..."
                  placement="bottom"
                  bg="gray.250"
                  color="gray.450"
                >
                  <span>
                    <Icon
                      as={MdInfoOutline}
                      w={["3", "4"]}
                      h={["3", "4"]}
                      color="gray.300"
                      ml="1"
                    />
                  </span>
                </Tooltip>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Grid>
    </Flex>
  );
}
