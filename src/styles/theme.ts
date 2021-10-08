import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "150": "#F5F8FA",
      "250": "#DADADA",
      "350": "#999999",
      "450": "#47585B",
    },
    yellow: {
      "450": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.150",
        color: "gray.450",
      },
    },
  },
});
