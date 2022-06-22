import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { DrawerProvider } from "../contexts/DrawerContext";
import { ColorModeButtonProvider } from "../contexts/ColorModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeButtonProvider>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </ColorModeButtonProvider>
    </ChakraProvider>
  )
}

export default MyApp
