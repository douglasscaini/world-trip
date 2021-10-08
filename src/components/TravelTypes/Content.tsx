import { Flex, Text, Image } from "@chakra-ui/react";

interface ContentProps {
  iconName: string;
  typeTravel: string;
  isWideVersion?: boolean;
}

export default function Content({ iconName, typeTravel, isWideVersion }: ContentProps) {
  return (
    <Flex direction={["row", "column"]} align="center" justify="center" flex={["50%", "1"]}>
      {isWideVersion ? (
        <Image w={85} h={85} src={`/icons/${iconName}.svg`} alt="Ícone da Viagem" />
      ) : (
        <Flex w={2} h={2} bg="yellow.450" borderRadius="50%" mr="2" mt="6" />
      )}
      <Text mt="6" fontSize={["md", "2xl"]} fontWeight="600" color="gray.450">
        {typeTravel}
      </Text>
    </Flex>
  );
}
