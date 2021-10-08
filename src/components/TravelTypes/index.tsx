import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Content from "./Content";

export default function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      maxWidth={1120}
      mx="auto"
      pl={["12", "0"]}
      pr={["12", "0"]}
      mt={["2", "20"]}
      mb={["9", "20"]}
      flexWrap="wrap"
    >
      <Content iconName="cocktail" typeTravel="vida noturna" isWideVersion={isWideVersion} />
      <Content iconName="surf" typeTravel="praia" isWideVersion={isWideVersion} />
      <Content iconName="building" typeTravel="moderno" isWideVersion={isWideVersion} />
      <Content iconName="museum" typeTravel="clássico" isWideVersion={isWideVersion} />
      <Content iconName="earth" typeTravel="e mais..." isWideVersion={isWideVersion} />
    </Flex>
  );
}
