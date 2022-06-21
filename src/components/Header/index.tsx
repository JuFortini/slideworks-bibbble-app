import { Box, Divider, Flex, IconButton, Img } from "@chakra-ui/react";
import {RiSearchLine} from 'react-icons/ri';

import { Navbar } from "./Navbar";

export function Header() {
  return (
    <Box h="7rem" w="100%">
      <Flex px="10rem" h="100%" align="center">
        <Img src="logo.svg" alt="logo da Bibble" mr="15rem" />
        <Navbar />
        <IconButton
          aria-label="Procurar na página"
          icon={<RiSearchLine/>}
          mx="3.5rem" 
          size="sm"
          bg="inherit"
          _hover={{
            bg: "inherit"
          }}
        />
      </Flex>
      <Divider h="1px" bg="gray.200" />
    </Box>
  );
}