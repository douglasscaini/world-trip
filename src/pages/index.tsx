import { Flex, Center, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Divider from "../components/Divider";
import SlideSwiper from "../components/SlideSwiper";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

type Continent = {
  slug: string;
  title: string;
  subtitle: string;
  banner: string;
};

export type ContinentsProps = {
  continents: Continent[];
};

export default function Home({ continents }: ContinentsProps) {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <Header />
      <Banner />
      <TravelTypes />

      <Center flexDirection="column">
        <Divider />
        <Text mt={["6", "14"]} fontSize={["xl", "4xl"]} fontWeight="500" color="gray.450">
          Vamos Nessa? {}
        </Text>
        <Text fontSize={["xl", "4xl"]} fontWeight="500" color="gray.450">
          Então escolha seu continente
        </Text>
      </Center>

      <SlideSwiper continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(Prismic.predicates.at("document.type", "continent"));

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      subtitle: continent.data.subtitle,
      banner: continent.data.banner.url,
    };
  });

  return {
    props: { continents },
    revalidate: 60 * 30, // 30 minutes
  };
};
