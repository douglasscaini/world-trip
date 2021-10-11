import { Text, Box, Heading, Flex, HStack, Tooltip, Icon } from "@chakra-ui/react";

import { MdInfoOutline } from "react-icons/md";

interface BoxInfoProps {
  number: number;
  text: string;
  cityInfo?: boolean;
}

export default function BoxInfo({ number, text, cityInfo = false }: BoxInfoProps) {
  if (cityInfo) {
    return (
      <Box align="center">
        <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
          {number}
        </Heading>
        <Flex align="center">
          <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
            {text}
          </Text>
          <HStack>
            <Tooltip
              label="Tirana, Berlim, Astana e mais..."
              placement="bottom"
              bg="gray.250"
              color="gray.450"
            >
              <span>
                <Icon as={MdInfoOutline} w={["3", "4"]} h={["3", "4"]} color="gray.300" ml="1" />
              </span>
            </Tooltip>
          </HStack>
        </Flex>
      </Box>
    );
  }

  return (
    <Box align="center">
      <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
        {number}
      </Heading>
      <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
        {text}
      </Text>
    </Box>
  );
}
