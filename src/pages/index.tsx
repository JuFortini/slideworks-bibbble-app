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
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
          <BookCards 
            image="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Título" 
            author="Autor"
            description="Descrição do livro"
            genre="Gênero"
            publishedAt="21 Jun. 2022"
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  )
}
