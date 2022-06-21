import Link from "next/link";
import { HStack } from "@chakra-ui/react";

export function Navbar() {
  return (
    <HStack spacing="3.5rem">
      <Link href="/home" passHref>Home</Link>
      <Link href="/home" passHref>Home</Link>
      <Link href="/home" passHref>Home</Link>
      <Link href="/home" passHref>Home</Link>
      <Link href="/home" passHref>Home</Link>
      <Link href="/home" passHref>Home</Link>
    </HStack>
  );
}