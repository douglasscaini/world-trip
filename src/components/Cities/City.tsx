import { Flex, Text, Image } from "@chakra-ui/react";

type CityProps = {
  name: string;
  cityPicture: string;
  country: string;
  countryPicture: string;
};

export default function City({ name, cityPicture, country, countryPicture }: CityProps) {
  return (
    <Flex w={256} direction="column" borderRadius={6} mb="12" bg="white" boxShadow="lg">
      <Image
        src={`${cityPicture}`}
        alt={`Imagem de ${name}`}
        w={256}
        h={170}
        objectFit="cover"
        borderTopRadius={6}
      />
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
          src={`${countryPicture}`}
          alt={`"Bandeira do país ${country}`}
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
