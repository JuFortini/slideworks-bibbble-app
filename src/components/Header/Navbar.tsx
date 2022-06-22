import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Stack, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { RiSearchLine } from "react-icons/ri";
import { ColorModeButtonContext } from "../../contexts/ColorModeContext";
import { useDrawerContext } from "../../contexts/DrawerContext";

import { NavLink } from "./NavLink";

export function Navbar() {

  const isDrawerMenu = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { isOpen, onClose } = useDrawerContext();

  const { icon } = useContext(ColorModeButtonContext);
  const { toggleColorMode } = useColorMode();

  if (isDrawerMenu) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent p="1rem">
          <Flex align="center">
            <DrawerHeader fontSize="2xl">Navegação</DrawerHeader>
            <IconButton 
              aria-label="color mode" 
              fontSize="2xl" 
              icon={icon} 
              position="absolute" 
              right="0" 
              mx="4rem" 
              bg="inherit"
              cursor="pointer"
              _hover={{
                bg: "inherit",
              }}
              onClick={toggleColorMode}
            />
          </Flex>
          <DrawerCloseButton />
          <Divider my="1rem" />
          <DrawerBody>
            <Stack spacing="1rem" ml="1rem" mt="1rem">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/Team">Team</NavLink>
              <IconButton
                pt="1rem"
                aria-label="Procurar na página"
                icon={<RiSearchLine/>}
                w="min-content" 
                size="sm"
                bg="inherit"
                _hover={{
                  bg: "inherit"
                }}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <HStack spacing={["2rem", "2rem", "2rem", "2rem", "3.5rem"]} fontFamily="Roboto" textDecoration="none">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/features">Features</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/Team">Team</NavLink>
    </HStack>
  );
}