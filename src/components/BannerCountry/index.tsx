import { Flex, Text } from "@chakra-ui/react";

type BannerCountryProps = {
  banner: string;
  title: string;
};

export default function BannerCountry({ banner, title }: BannerCountryProps) {
  return (
    <Flex
      w="100vw"
      h={["150px", "500px"]}
      bgImage={`url(${banner})`}
      bgPosition="center"
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
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}
