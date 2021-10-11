import { Flex, Text } from "@chakra-ui/react";

export default function BannerCountry() {
  return (
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
  );
}
