import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from '../structures/component/layout/Layout';
import Fade from 'react-reveal/Fade';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Text, Container, Grid, GridItem, Heading,Image,Flex,AspectRatio, IconButton,Button,Link } from '@chakra-ui/react';
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from "@chakra-ui/react"

function Books() {

    const [books, setbooks] = useState([])

    const getBooks = ()=>{
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=utRs6xq2KmbdGDPULPZodSlBiz7ACvSO')
        .then((res)=>{
            console.log(res.data.results.books)
            setbooks(res.data.results.books)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <Layout>
                <Container maxW="6xl" paddingX={{base:7,md:20,lg:30}} paddingTop={{base:40,md:40,lg:40}}>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Buffet's Best Book</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            We know Warren Buffet is a multi-millionaire stock investor,this is the books that change his whole life by doing Value Investing
                        </Text>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Grid
                            mt={{base:3,md:3,lg:5}}
                            templateColumns="repeat(4, 1fr)"
                            templateRows="repeat(1, 1fr)"
                            gap={{base:2,md:4}}
                            w="full"
                            h="full"
                        >
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}} maxW={{base:"70px",md:"150px",lg:"450px"}}>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/I/51fESaIGgVL._AC_SY580_.jpg" objectFit="cover" alt="intelligent investor"></Image>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Heading fontSize={{base:"sm",md:"2xl",lg:"3xl"}}>The Intelligent Investor</Heading>
                                <Text color="gray" fontSize={{base:"10px",md:"lg",lg:"xl"}}>Benjamin Graham</Text>
                                <Text fontSize={{base:0,md:0,lg:"md"}} textAlign="justify">The Intelligent Investor is widely considered to be the definitive text on value investing. According to Graham, investors should analyze a company's financial reports and its operations but ignore the market noise.</Text>
                                <Heading mt={{base:1,md:2,lg:2}} fontSize={{base:"8px",md:"md",lg:"2xl"}}><Link href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661" isExternal color="teal" >Buy Now !<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}} maxW={{base:"70px",md:"150px",lg:"450px"}}>
                                    <Image src="https://images-na.ssl-images-amazon.com/images/I/51hwLfcPJPL._SX324_BO1,204,203,200_.jpg" objectFit="cover" alt="intelligent investor"></Image>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Heading fontSize={{base:"sm",md:"2xl",lg:"3xl"}}>Security Analysis</Heading>
                                <Text color="gray" fontSize={{base:"10px",md:"lg",lg:"xl"}}>Benjamin Graham & David Dodd</Text>
                                <Text fontSize={{base:0,md:0,lg:"md"}} textAlign="justify">Security analysis is a method which helps to calculate the value of various assets and also find out the effect of various market fluctuations on the value tradable financial instruments.</Text>
                                <Heading mt={{base:1,md:2,lg:2}} fontSize={{base:"8px",md:"md",lg:"2xl"}}><Link href="https://www.audible.com/pd/Security-Analysis-Sixth-Edition-Audiobook/B083Q25D79?source_code=GO1DH13310082090OZ&ds_rl=1262685&ds_rl=1263561&ds_rl=1260658&gclid=CjwKCAjwoNuGBhA8EiwAFxomAwbMNKEjWu3P5YOD7D1JUYR5uSbRuznLqPcVPl4CINHmhudXhDkemRoCt2QQAvD_BwE&gclsrc=aw.ds" isExternal color="teal" >Buy Now !<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} mt={{base:3,md:5,lg:10}}>NYTimes Best Sellers</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            Authoritatively ranked lists of books sold in the United States, sorted by format and genre.
                        </Text>
                    </Fade>
                        <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(3, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {books.map((book,index)=>{
                            return (
                                <GridItem colSpan={1}>
                                    <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                        <Image
                                            src={book.book_image}
                                        >
                                        </Image>
                                        <Box p={{base:1}}>
                                            <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{book.title}</Text>
                                            <Text fontSize={{base:5,md:15,lg:20}} color="gray.500">{book.author}</Text>
                                            <Text fontSize={{base:5,md:15,lg:20}} color="gray.300">{book.publisher}</Text>
                                            <Text fontSize={{base:5,md:15,lg:20}}><Link href={book.amazon_product_url} isExternal color="teal">Buy Now !<ExternalLinkIcon mx="2px" /></Link></Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                            )
                        })}
                        </Grid>
                    
                </Container>
            </Layout>
        </>
    )
}

export default Books
