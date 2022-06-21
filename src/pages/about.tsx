import { Flex } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function About() {
  return (
    <Flex direction="column">
      <Header />
      <h1>About</h1>
    </Flex>
  );
}