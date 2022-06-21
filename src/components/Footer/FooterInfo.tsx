import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

export function FooterInfo() {
  return (
    <HStack spacing="2.5rem" color="gray.50" fontFamily="DM Sans">
      <Link href="http://google.com">
        <Text>Terms &amp; Conditions</Text>
      </Link>
      <Link href="http://google.com">
        <Text>Privacy Policy</Text>
      </Link>
    </HStack>
  );
}