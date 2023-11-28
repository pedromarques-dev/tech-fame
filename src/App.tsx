import * as React from "react"
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  theme,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react"
import api from "./utils/posts.json";
import { IPost } from "./interfaces/posts.interface";
export const App = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)

  const addPosts = () => {
    setPosts(
      [
        ...posts,
      {
        id: Math.floor(Math.random() * (1000 - 10 + 1) + 10),
        title: title,
        description: description,
        createdAt: "28/11/2023"
      }
      ]
    )
    setTitle("")
    setDescription("")
  }

  const removePost = (id: number) => {
    const removedPost = posts.findIndex(post => post.id === id);
    posts.splice(removedPost, removedPost + 1)
    setPosts([...posts])
  }

  React.useEffect(() => {
    setPosts(api.posts);
  }, [])


  return (
    <ChakraProvider theme={theme}>
      <Flex 
        w="100%"
        color="#333333" 
        justifyContent="center"
        alignItems="center"
      >
        <Heading 
          as='h1' 
          size='2xl' 
          noOfLines={1} 
          py={5}
        >
          Tech Fama
        </Heading>
      </Flex>
      <Heading 
        color="#3498db"
        as='h3' 
        size='lg' 
        noOfLines={1}
        p={2}
      >
        Notícias
      </Heading>
      <Flex
        w="100%"
        color="#333333"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        {
          posts && posts.map((post, index) => (
            <Box key={post.id + index} p={2} w="100%">
              <Heading 
                as="h4" 
                size="sm"
                pb={2} 
                textAlign="justify"
                whiteSpace="break-spaces"
              >
                {post.title}
              </Heading>
              <Text fontSize={12} textAlign="justify">
                {post.description}
              </Text>
              <Text 
                fontSize={10}
                fontWeight="bold"
                textAlign="right" 
                p={2} 
                color="#f39c12"
              >
                  {post.createdAt}
              </Text>
              <Button size="sm" onClick={() => removePost(post.id)}>Remover post</Button>
            </Box>
          ))
        }
        <Flex
          w="100%"
          color="#fff"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          bgColor="#3498db"
          borderRadius={20}
          p={2}
        >
          <Box>
            <Heading 
              as='h3' 
              size='lg' 
              noOfLines={1}
              pt={2}
            >
              Cadastro
            </Heading>
          </Box>
          <Flex
            w="40%"
            justifyContent="center"
            alignItems="center"
            p={5}
          >
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input
                color="#333"
                mb={3}
                bgColor="#fff"
                borderColor="#ccc" 
                size="md" 
                type="email" 
                value={title} 
                onChange={handleTitleChange} 
              />

              <FormLabel>Descrição</FormLabel>
              <Textarea 
                color="#333"
                bgColor="#fff"
                size="md" 
                value={description} 
                onChange={handleDescriptionChange} 
              />
            </FormControl>
          </Flex>
          <Box pb={3} mt={2}>
                <Button 
                  bgColor="#f39c12" 
                  color="white"
                  size='md'
                  _hover={{
                    bgColor: "#fff",
                    color: "#f39c12",
                    border: "1px solid #f39c12",
                  }}
                  onClick={addPosts}
                >
                  Adicionar Post
                </Button>
              </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
  
}