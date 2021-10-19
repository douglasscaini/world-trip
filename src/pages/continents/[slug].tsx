import { Flex, Text, Grid } from "@chakra-ui/react";
import Cities from "../../components/Cities";
import BoxInfo from "../../components/BoxInfo";
import BannerCountry from "../../components/BannerCountry";
import { GetStaticPaths, GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";
import { ParsedUrlQuery } from "querystring";
import HeaderContinent from "../../components/HeaderContinent";

interface ParamsProps extends ParsedUrlQuery {
  slug: string;
}

type City = {
  name: string;
  city_picture: {
    url: string;
  };
  country: string;
  country_picture: {
    url: string;
  };
};

type Continent = {
  slug: string;
  title: string;
  description: string;
  banner: string;
  countries: string;
  languages: string;
  population: string;
  highlights: string;
  bestCities: {
    name: string;
    cityPicture: string;
    country: string;
    countryPicture: string;
  }[];
};

export type ContinentProps = {
  continent: Continent;
};

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex w="100%" direction="column" overflowX="hidden">
      <HeaderContinent />

      <BannerCountry banner={continent.banner} title={continent.title} />

      <Grid
        templateColumns={["1fr", "1fr 1fr"]}
        templateRows={["1fr 1fr", "1fr"]}
        maxWidth={1120}
        mx="auto"
        justify="space-between"
        mt={["6", "20"]}
        pl={["4", "0"]}
        pr={["4", "0"]}
      >
        <Text fontSize={["sm", "2xl"]} textAlign="justify">
          {continent.description}
        </Text>

        <Flex align="center" justify="space-evenly">
          <BoxInfo text={continent.countries} details="países" />
          <BoxInfo text={continent.languages} details="línguas" />
          <BoxInfo
            text={continent.population}
            details="habitantes"
            highlights={continent.highlights}
          />
        </Flex>
      </Grid>

      <Flex w="100%" maxWidth={1120} mx="auto" direction="column" mt={["8", "20"]}>
        <Text fontSize={["2xl", "4xl"]} fontWeight="500" pl={["4", "0"]}>
          As melhores cidades
        </Text>

        <Cities continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();

  const { slug } = params as ParamsProps;

  const response = await prismic.getByUID("continent", String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    banner: response.data.banner.url,
    countries: response.data.countries,
    languages: response.data.languages,
    population: response.data.population,
    highlights: response.data.highlights,
    bestCities: response.data.best_cities.map((city: City) => {
      return {
        name: city.name,
        cityPicture: city.city_picture.url,
        country: city.country,
        countryPicture: city.country_picture.url,
      };
    }),
  };

  return {
    props: { continent },
    revalidate: 60 * 30, // 30 minutes
  };
};
