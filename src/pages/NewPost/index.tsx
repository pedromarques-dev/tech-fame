import React from "react";
import { Link } from "react-router-dom";
import {
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
} from "@chakra-ui/react";
import { createPost } from "../../resources/api";
import strings from "../../resources/strings";

export const NewPost: React.FC = () => {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)

    
  const addPosts = async () => {
    await createPost({
        id: Math.floor(Math.random() * (1000 - 10 + 1) + 10),
        title: title,
        description: description,
        createdAt: "28/11/2023"
      })
    
    setTitle("")
    setDescription("")
  }

    return (
        <Flex
            w="100%"
            color="#fff"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            bgColor="#3498db"
            p={2}
            minH="100vh"
        >
            <Box>
                <Heading 
                    as='h3' 
                    size='lg' 
                    noOfLines={1}
                    pt={2}
                >
                    {strings.pages.newPost.header}
                </Heading>
            </Box>
            <Flex
                w="40%"
                justifyContent="center"
                alignItems="center"
                p={5}
            >
                <FormControl>
                    <FormLabel>{strings.pages.newPost.formLabels.title}</FormLabel>
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

                    <FormLabel>{strings.pages.newPost.formLabels.description}</FormLabel>
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
                    {strings.buttons.actions.add}
                </Button>
            </Box>
            <Link to="/">home</Link>
      </Flex>
    )
} 