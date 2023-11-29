import * as React from "react"
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react"
import { IPost } from "../../interfaces/posts.interface";
import strings from "../../resources/strings";
import { getAllPosts } from "../../resources/api";

export const HomePage: React.FC = () => {
  const [posts, setPosts] = React.useState<IPost[]>([]);

  const removePost = (id: number) => {
    const removedPost = posts.findIndex(post => post.id === id);
    posts.splice(removedPost, removedPost + 1)
    setPosts([...posts])
  }

  React.useEffect(() => {
    const fetch = async () => {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetch()
  }, [])


  return (
    <>
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
          {strings.pages.home.labels.header}
        </Heading>
      </Flex>
      <Heading 
        color="#3498db"
        as='h3' 
        size='lg' 
        noOfLines={1}
        p={2}
      >
        {strings.pages.home.labels.news}
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
              <Button size="sm" onClick={() => removePost(post.id)}>{strings.buttons.actions.remove}</Button>
            </Box>
          ))
        }
          <Box pb={3} mt={2}>
               <Link to="/newPost">
                <Button 
                    bgColor="#f39c12" 
                    color="white"
                    size='md'
                    _hover={{
                      bgColor: "#fff",
                      color: "#f39c12",
                      border: "1px solid #f39c12",
                    }}
                  >
                    Adicionar Post
                  </Button>
               </Link>
              </Box>
        </Flex>
    </>
  )
  
}