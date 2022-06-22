import { Box, Divider, Flex, IconButton, Img, LinkBox, LinkOverlay, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import {RiMenuFill, RiSearchLine} from 'react-icons/ri';
import { ColorModeButtonContext } from "../../contexts/ColorModeContext";
import { useDrawerContext } from "../../contexts/DrawerContext";

import { Navbar } from "./Navbar";

export function Header() {

  const isLargeWindow = useBreakpointValue({
    base: false,
    lg: true
  });

  const { onOpen } = useDrawerContext();

  const { icon } = useContext(ColorModeButtonContext);
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box h="7rem" w="100%">
      <Flex 
        px={["2rem", "6rem", "6rem", "6rem", "10rem"]} 
        h="100%" 
        align="center" 
        justify={["space-between", "space-between", "space-between", "space-between", "normal"]}
      >
        <LinkBox>
          <LinkOverlay href="/">
            <Img 
              src="/logo.svg" 
              bg={colorMode === "dark" ? "whiteAlpha.500" : "inherit"} 
              borderRadius="4px" alt="logo da Bibble" 
              p="0.5rem" 
              mr={["0", "0", "5rem", "5rem", "15rem"]} 
            />
          </LinkOverlay>
        </LinkBox>
        <Navbar />
        { isLargeWindow &&
          <>
            <IconButton
              aria-label="Procurar na página"
              icon={<RiSearchLine/>}
              mx={["2rem", "2rem", "2rem", "3.5rem"]} 
              size="sm"
              bg="inherit"
              _hover={{
                bg: "inherit"
              }}
            />
            <IconButton 
              aria-label="color mode" 
              fontSize={["md", "2xl"]} 
              icon={icon} 
              position="absolute" 
              right="0" 
              mx={["4", "16"]} 
              bg="inherit"
              cursor="pointer"
              _hover={{
                bg: "inherit",
              }}
              onClick={toggleColorMode}
            />
          </>
        }
        { !isLargeWindow &&
          <IconButton 
            aria-label="menu de navegação" 
            icon={<RiMenuFill />}
            fontSize="xl"
            bg="inherit"
            _hover={{
              bg: "inherit"
            }}
            onClick={onOpen}
          />
        }
      </Flex>
      <Divider bg="gray.200" />
    </Box>
  );
}