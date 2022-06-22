import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { BookCards } from "../components/BookCards"
import Footer from "../components/Footer"
import { Header } from "../components/Header"

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Box w="100%" px="10rem" py="5rem">
        <SimpleGrid
          templateColumns="repeat(auto-fit, minmax(16rem, 16rem))"
          spacingY="1.5rem"
          justifyContent="space-between"
        >
          <BookCards />
          <BookCards />
          <BookCards />
          <BookCards />
          <BookCards />
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  )
}
