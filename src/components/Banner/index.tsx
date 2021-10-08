import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Content from "./Content";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100vw"
      h={["40", "96"]}
      bgImage="url('/banner.jpg')"
      bgPosition={["100% 38%", "100% 32%"]}
    >
      <Content isWideVersion={isWideVersion} />
    </Flex>
  );
}
