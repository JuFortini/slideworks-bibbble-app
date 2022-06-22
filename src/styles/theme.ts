import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: {
    gray: {
      "900": "#262626",
      "800": "#363638",
      "700": "#4B4B4F",
      "600": "#606069",
      "500": "#787885",
      "400": "#9595A6",
      "300": "#B4B4C2",
      "200": "#CCCCCC",
      "100": "#E0E0E0",
      "50": "#F8F8F8",
    },
    cyan : {
      "900": "#052933",
      "800": "#094659",
      "700": "#0D6680",
      "600": "#128FB3",
      "500": "#17B8E6",
      "400": "#48D3FE",
      "300": "#73D5FF",
      "200": "#99E2FF",
      "100": "#AFE4FA",
      "50": "#CFEFFC",
    },
    blue: {
      "900": "#250D4F",
      "800": "#361273",
      "700": "#491A99",
      "600": "#5C19E3",
      "500": "#2264D1",
      "400": "#327FFC",
      "300": "#5797FF",
      "200": "#78ABFF",
      "100": "#9DC2FF",
      "50": "#BBD5FF",
    },
    purple: {
      "900": "#250D4F",
      "800": "#361273",
      "700": "#491A99",
      "600": "#5C19E3",
      "500": "#664BFA",
      "400": "#816AFE",
      "300": "#927FFA",
      "200": "#A999FF",
      "100": "#C6BAFf",
      "50": "#DDD6FF",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "whiteAlpha.100" : "gray.50",
        color: props.colorMode === "dark" ? "gray.50" : "blue.900",
      },
      link: {
        decoration: "none",
        cursor: "pointer",
      },
    }),
  },
})