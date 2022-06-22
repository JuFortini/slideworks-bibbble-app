import { Box, Button, Flex, Img, Stack, Text, useDisclosure } from "@chakra-ui/react";

interface BookCardsProps {
  image: string,
  alt: string,
  title: string,
  author: string,
  description: string,
  genre: string,
  publishedAt: string,
}

export function BookCards({ image, title, author, description, genre, publishedAt }: BookCardsProps) {

  const { onOpen} = useDisclosure();

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
        <Img 
          src={image} 
          w="14.2rem"
          h="14rem"
          objectFit="cover"
          borderRadius="4px"
          mb="0.75rem"
        />
        <Stack spacing="0.5rem" mx="0.5rem">
          <Text>{title}</Text>
          <Text fontSize="sm" color="gray.500">{author}</Text>
          <Flex position="relative">
            <Text fontSize="xs" color="gray.500" h="2.5rem">{description}</Text>
            <Button
              position="absolute"
              bg="gray.50"
              bottom="0"
              right="0"
              fontSize="xs"
              color="blue.500"
              size="xs"
              _hover={{
                bg: "gray.50"
              }}
              onClick={onOpen}
            >
              ...more
            </Button>
          </Flex>
          <Flex justify="space-between" align="center">
            <Box
              fontSize="sm"
              color="blue.500"
              p="0.06rem"
              borderRadius="4px"
              bgGradient="linear(to-r, #A999FF, #73D5FF)"
              bgClip="border"
            >
              <Text bg="gray.50" px="0.75rem" py="0.5rem" borderRadius="3.5px">{genre}</Text>
            </Box>
            <Text fontSize="sm" color="blue.500">{publishedAt}</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}