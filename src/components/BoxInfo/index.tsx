import { Text, Box, Heading, Flex, HStack, Tooltip, Icon } from "@chakra-ui/react";

import { MdInfoOutline } from "react-icons/md";

interface BoxInfoProps {
  text: string;
  details: string;
  highlights?: string;
}

export default function BoxInfo({ text, details, highlights }: BoxInfoProps) {
  if (highlights) {
    return (
      <Box align="center">
        <Heading fontSize={["2xl", "5xl"]} fontWeight="600" color="yellow.450">
          {text}
        </Heading>
        <Flex align="center">
          <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
            {details}
          </Text>
          <HStack>
            <Tooltip label={highlights} placement="bottom" bg="gray.250" color="gray.450">
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
        {text}
      </Heading>
      <Text fontSize={["lg", "2xl"]} fontWeight={["400", "600"]} color="gray.450">
        {details}
      </Text>
    </Box>
  );
}
