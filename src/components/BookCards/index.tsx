import { Box, Button, Flex, Img, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";

interface BookCardsProps {
  image: string,
  alt: string,
  title: string,
  author: string,
  shortDescription: string,
  fullDescription: string,
  genre: string,
  publishedAt: string,
}

export function BookCards({ image, title, author, shortDescription, fullDescription, genre, publishedAt }: BookCardsProps) {

  const { onOpen} = useDisclosure();

  const { colorMode } = useColorMode();

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
            <Text
              fontSize="xs"
              color="gray.500"
              h="2.5rem"
            >
              {shortDescription}
            </Text>
            <Popover offset={[-80, 0]}> 
              <PopoverTrigger>
                <Button
                  position="absolute"
                  bg="inherit"
                  bottom="0"
                  right="0"
                  fontSize="xs"
                  color="blue.500"
                  size="xs"
                  _hover={{
                    bg: "inherit"
                  }}
                  onClick={onOpen}
                >
                  ...more
                </Button>
              </PopoverTrigger>
              <PopoverContent p="1rem" fontSize="sm" w={["280px", "280px", "360px"]}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {fullDescription}
                </PopoverBody>
              </PopoverContent>
            </Popover>
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
              <Text bg={colorMode === "light" ? "gray.50" : "gray.900"} px="0.75rem" py="0.5rem" borderRadius="3.5px">{genre}</Text>
            </Box>
            <Text fontSize="sm" color="blue.500">{publishedAt}</Text>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}