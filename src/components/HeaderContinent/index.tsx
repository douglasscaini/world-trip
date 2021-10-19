import { Flex, Icon, Link } from "@chakra-ui/react";
import Header from "../../components/Header";

import { IoChevronBackOutline } from "react-icons/io5";

export default function HeaderContinent() {
  return (
    <Flex w="100%" maxWidth={1120} mx="auto" align="center" pl={["4", "0"]} pr={["4", "0"]}>
      <Link href="/">
        <Icon as={IoChevronBackOutline} w={["4", "6"]} h={["4", "6"]} />
      </Link>

      <Header />
    </Flex>
  );
}
