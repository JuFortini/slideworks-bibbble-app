import { Box, Divider, Flex, Img, Text } from "@chakra-ui/react";
import { FooterInfo } from "./FooterInfo";
import { SocialNetworks } from "./SocialNetworks";

export default function Footer() {
  return (
    <Box bg="#1E2833" h="17rem">
      <Flex align="start" mx={["2rem", "4rem", "6rem", "8rem", "12rem"]} my="3.5rem" direction="column">
        <Img src="/logoFooter.svg" alt="logo da LibSlide" h="2rem" />
        <Divider borderColor="gray.600" my={["1rem", "1rem", "2rem", "3rem"]} /> 
        <Flex w="100%" direction={['column', 'column', 'row']} justify="space-between">
          <FooterInfo />
          <SocialNetworks />
        </Flex>       
      </Flex>
    </Box>
  );
}