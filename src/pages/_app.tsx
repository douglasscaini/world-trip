import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "../services/mirage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/slide.scss";

import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
