import { Flex, Text, Image, Box, Stack } from "@chakra-ui/react";

interface ContentProps {
  isWideVersion?: boolean;
}

export default function Content({ isWideVersion }: ContentProps) {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" align="center" justify="space-between">
      <Stack spacing={["2", "5"]}>
        <Text fontSize={["xl", "4xl"]} fontWeight="500" color="gray.150" pl={["4", "0"]}>
          5 Continentes,
          <br />
          Infinitas possibilidades.
        </Text>

        <Text fontSize={["sm", "xl"]} color="gray.250" maxW={550} pl={["4", "0"]}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>

      {isWideVersion && (
        <Box>
          <Image src="/airplane.svg" alt="Avião nas nuvens" transform="translateY(72px)" />
        </Box>
      )}
    </Flex>
  );
}
