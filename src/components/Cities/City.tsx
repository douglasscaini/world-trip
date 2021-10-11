import { Flex, Text, Image } from "@chakra-ui/react";

interface CityProps {
  name: string;
  country: string;
  translateCountry: string;
}

export default function City({ name, country, translateCountry }: CityProps) {
  return (
    <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
      <Image src={`/images/europe/${name}.png`} alt="Londres" />
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
            {name}
          </Text>
          <Text mt="3" mb="6" fontSize="md" color="gray.350">
            {country}
          </Text>
        </Flex>
        <Image
          src={`/images/europe/${translateCountry}.png`}
          alt={`"Bandeira do ${country}`}
          w="8"
          h="8"
          borderRadius="50%"
          objectFit="cover"
          mr="6"
        />
      </Flex>
    </Flex>
  );
}
