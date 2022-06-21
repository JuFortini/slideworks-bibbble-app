import { HStack } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <HStack spacing="3.5rem" fontFamily="Roboto" textDecoration="none">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/features">Features</NavLink>
      <NavLink href="/pricing">Pricing</NavLink>
      <NavLink href="/gallery">Gallery</NavLink>
      <NavLink href="/Team">Team</NavLink>
    </HStack>
  );
}