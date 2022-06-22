import { Box, Img, Text } from "@chakra-ui/react";

export function BookCards() {
  return (
    <Box 
      w="16rem" 
      h="26rem"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="4px"
      borderColor="gray.100"
    >
      <Box m="1rem">
        <Img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <Text>Nome do livro</Text>
      </Box>
    </Box>
  );
}