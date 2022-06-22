import { Box, Flex, Image, Modal, ModalCloseButton, ModalContent, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react"
import { format } from "date-fns"
import parse from "date-fns/parse"
import { GetStaticProps } from "next"
import { BookCards } from "../components/BookCards"
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { api } from "../services/api"

interface BooksProps {
  id: number,
  title: string,
  author: string,
  description: string,
  image: string,
  genre: string,
  publishedAt: string,
}

interface HomeProps {
  books: BooksProps[]
}

export default function Home({ books }: HomeProps) {

  const { isOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column">
      <Header />
      <Box w="100%" px={["2rem", "6rem", "6rem", "6rem", "10rem"]} py="5rem">
        <SimpleGrid
          templateColumns="repeat(auto-fit, minmax(16rem, 16rem))"
          spacingY="1.5rem"
          justifyContent={["center", "center", "space-between"]}
        >
          {books.map(book => {
            return (
              <BookCards
                key={book.id} 
                image={book.image}
                alt={`imagem do livro ${book.title}`}
                title={book.title} 
                author={book.author}
                description={book.description.substring(0, 50)}
                genre={book.genre}
                publishedAt={book.publishedAt}
              />
            )
          })}
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get("/books");
  
  const results = response.data;

  const books = results.data.map(book => {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      image: book.image,
      genre: book.genre,
      publishedAt: format(parse(book.published, 'yyyy-MM-dd', new Date()), 'dd LLL. yyyy'),
    }
  });

  return {
    props: {
      books
    }
  }
}
