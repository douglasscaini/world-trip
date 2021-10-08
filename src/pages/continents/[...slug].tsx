import { Flex, Icon, Text } from "@chakra-ui/react";
import Header from "../../components/Header";

import { IoChevronBackOutline } from "react-icons/io5";

export default function Continent() {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <Flex w="100%" maxWidth={1120} mx="auto" align="center" pl={["4", "0"]} pr={["4", "0"]}>
        <Icon as={IoChevronBackOutline} w={["4", "6"]} h={["4", "6"]} />
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
          <Text fontSize={["2xl", "5xl"]} fontWeight="600" color="gray.150">
            Europa Test Error Push 3
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
