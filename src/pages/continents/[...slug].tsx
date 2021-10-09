import {
  Flex,
  Icon,
  Text,
  Link,
  Box,
  Grid,
  Heading,
  Tooltip,
  HStack,
  Image,
} from "@chakra-ui/react";
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

      <Flex w="100%" maxWidth={1120} mx="auto" direction="column" mt={["8", "20"]}>
        <Text fontSize={["2xl", "4xl"]} fontWeight="500" pl={["4", "0"]}>
          Cidades +100
        </Text>

        <Flex w="100%" mt={["5", "10"]} flexWrap="wrap" justify={["center", "space-between"]}>
          <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
            <Image src="/images/europe/londres.png" alt="Londres" />
            <Flex
              border="1px"
              borderTop="0"
              borderColor="yellow.450"
              borderBottomRadius={6}
              align="center"
              justify="space-between"
            >
              <Flex pt="4" ml="6" direction="column">
                <Text fontSize="xl" fontWeight="600">
                  Londres
                </Text>
                <Text mt="3" mb="6" fontSize="md" color="gray.350">
                  Reino Unido
                </Text>
              </Flex>
              <Image
                src="/images/europe/united_kingdom.png"
                alt="Bandeira do Reino Unido"
                w="8"
                h="8"
                borderRadius="50%"
                objectFit="cover"
                mr="6"
              />
            </Flex>
          </Flex>

          <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
            <Image src="/images/europe/paris.png" alt="Paris" />
            <Flex
              border="1px"
              borderTop="0"
              borderColor="yellow.450"
              borderBottomRadius={6}
              align="center"
              justify="space-between"
            >
              <Flex pt="4" ml="6" direction="column">
                <Text fontSize="xl" fontWeight="600">
                  Paris
                </Text>
                <Text mt="3" mb="6" fontSize="md" color="gray.350">
                  França
                </Text>
              </Flex>
              <Image
                src="/images/europe/france.png"
                alt="Bandeira da França"
                w="8"
                h="8"
                borderRadius="50%"
                objectFit="cover"
                mr="6"
              />
            </Flex>
          </Flex>

          <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
            <Image src="/images/europe/roma.png" alt="Roma" />
            <Flex
              border="1px"
              borderTop="0"
              borderColor="yellow.450"
              borderBottomRadius={6}
              align="center"
              justify="space-between"
            >
              <Flex pt="4" ml="6" direction="column">
                <Text fontSize="xl" fontWeight="600">
                  Roma
                </Text>
                <Text mt="3" mb="6" fontSize="md" color="gray.350">
                  Itália
                </Text>
              </Flex>
              <Image
                src="/images/europe/italy.png"
                alt="Bandeira da Itália"
                w="8"
                h="8"
                borderRadius="50%"
                objectFit="cover"
                mr="6"
              />
            </Flex>
          </Flex>

          <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
            <Image src="/images/europe/praga.png" alt="Praga" />
            <Flex
              border="1px"
              borderTop="0"
              borderColor="yellow.450"
              borderBottomRadius={6}
              align="center"
              justify="space-between"
            >
              <Flex pt="4" ml="6" direction="column">
                <Text fontSize="xl" fontWeight="600">
                  Praga
                </Text>
                <Text mt="3" mb="6" fontSize="md" color="gray.350">
                  República Tcheca
                </Text>
              </Flex>
              <Image
                src="/images/europe/czech_republic.png"
                alt="Bandeira da República Tcheca"
                w="8"
                h="8"
                borderRadius="50%"
                objectFit="cover"
                mr="6"
              />
            </Flex>
          </Flex>

          <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
            <Image src="/images/europe/amsterda.png" alt="Amsterdã" />
            <Flex
              border="1px"
              borderTop="0"
              borderColor="yellow.450"
              borderBottomRadius={6}
              align="center"
              justify="space-between"
            >
              <Flex pt="4" ml="6" direction="column">
                <Text fontSize="xl" fontWeight="600">
                  Amsterdã
                </Text>
                <Text mt="3" mb="6" fontSize="md" color="gray.350">
                  Holanda
                </Text>
              </Flex>
              <Image
                src="/images/europe/netherlands.png"
                alt="Bandeira da Holanda"
                w="8"
                h="8"
                borderRadius="50%"
                objectFit="cover"
                mr="6"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
