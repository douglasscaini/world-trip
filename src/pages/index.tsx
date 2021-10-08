import { Flex, Center, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Divider from "../components/Divider";
import SlideSwiper from "../components/SlideSwiper";

export default function Home() {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <Header />
      <Banner />
      <TravelTypes />

      <Center flexDirection="column">
        <Divider />
        <Text mt={["6", "14"]} fontSize={["xl", "4xl"]} fontWeight="500" color="gray.450">
          Vamos Nessa?
        </Text>
        <Text fontSize={["xl", "4xl"]} fontWeight="500" color="gray.450">
          Então escolha seu continente
        </Text>
      </Center>

      <SlideSwiper />
    </Flex>
  );
}
