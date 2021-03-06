import { Flex } from "@chakra-ui/react";
import BannerCountry from "../../components/BannerCountry";
import HeaderContinent from "../../components/Continent/header";
import InfoContinent from "../../components/Continent/info";
import { GetStaticPaths, GetStaticProps } from "next";
import BestCities from "../../components/Continent/bestCities";

import { getPrismicClient } from "../../services/prismic";
import { ParsedUrlQuery } from "querystring";

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
      <InfoContinent continent={continent} />
      <BestCities continent={continent} />
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
