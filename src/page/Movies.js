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

function Movies() {

    const [coming, setcoming] = useState([])
    const [current, setcurrent] = useState([])
    const [tvpopular, settvpopular] = useState([])
    const [tvtoprated, settvtoprated] = useState([])


    const getComing = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=3')
        .then((res)=>{
            console.log(res.data.results)
            setcoming(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getCurrent = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            setcurrent(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getTvPopular = ()=>{
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            settvpopular(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const getTvTop = ()=>{
        axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            console.log(res.data.results)
            settvtoprated(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(() => {
        getComing()
        getCurrent()
        getTvPopular()
        getTvTop()
    }, [])

    return (
        <>
            <Layout>
                <Container maxW="6xl" paddingX={{base:7,md:20,lg:30}} paddingTop={{base:40,md:40,lg:40}}>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Top of All Time</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            The only movie that makes me want to watch over and over again without feels bored,easily one of the best sci-fi movie ever.
                        </Text>
                        <Heading fontSize={{ base: "md", md: "2xl", lg: "4xl" }} letterSpacing={"0.3rem"} mt={{base:3,md:4}}>INTERSTELLAR</Heading>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Grid
                            mt={{base:3,md:3}}
                            templateColumns="repeat(2, 1fr)"
                            templateRows="repeat(2, 1fr)"
                            gap={{base:2,md:4}}
                            w="full"
                            h="full"
                        >
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}}>
                                    <AspectRatio ratio={1}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </AspectRatio>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}}>
                                    <AspectRatio ratio={1}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0vxOhd4qlnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </AspectRatio>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}}>
                                    <AspectRatio ratio={1}>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LY19rHKAaAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </AspectRatio>
                                </Box> 
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Heading fontSize={{base:"xs",md:"xl",lg:"4xl"}}>The Interstellar</Heading>
                                <Text textAlign="justify" mt={{base:0,md:2,lg:2}} fontSize={{base:"0",md:"15px",lg:"xl"}}>Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.</Text>
                                <Text textAlign="justify" mt={{base:0,md:1,lg:2}} fontSize={{base:"8px",md:0,lg:"xl"}}>Interstellar is about Earth’s last chance to find a habitable planet before a lack of resources causes the human race to go extinct.</Text>
                                <Text textAlign="justify" mt={{base:0,md:0,lg:2}} fontSize={{base:"0",md:0,lg:"xl"}}>Cooper,a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy.</Text>       
                                <Text fontSize={{base:"9px",md:"md",lg:"lg"}} mt={{base:1,md:0,lg:2}} color="gray">Christopher Nolan as a Director</Text>
                                <Text fontSize={{base:"9px",md:"md",lg:"lg"}} color="gray">Jonathan Nolan as a Writer</Text>
                                <Text fontSize={{base:"8px",md:"md",lg:"lg"}} marginEnd={{base:"10px"}} color="gray">Matthew McConaughey, Anne Hathaway, Jessica Chastain are the main casts</Text>
                                <Heading fontSize={{base:"xs",md:"xl",lg:"4xl"}}><Link href="https://www.youtube.com/watch?v=F6TU69adAzE" isExternal color="teal" >Watch Now !<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} mt={{base:4,md:8,lg:12}}>Upcoming Movies</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            All upcoming movies you can watch to fullfill ur Holiday 🎉 , Lists all of your favorites and set up the date ! 
                        </Text>
                    </Fade>
                    <Fade>
                        <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {coming.slice(0,16).map((movie,index)=>{
                                return (
                                    <GridItem colSpan={1}>
                                        <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                width="full"
                                                height="full"
                                            >
                                            </Image>
                                            <Box p={{base:1}}>
                                                <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{movie.title}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray">Released on {movie.release_date}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray.500">⭐ {movie.vote_average}</Text>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} mt={{base:4,md:8,lg:12}}>Current Movies</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            If u dont want to wait the upcoming movies, u can set the date to watch all the movies that available right now ! 
                        </Text>
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {current.slice(0,16).map((movie,index)=>{
                                return (
                                    <GridItem colSpan={1}>
                                        <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                width="full"
                                                height="full"
                                            >
                                            </Image>
                                            <Box p={{base:1}}>
                                                <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{movie.title}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray">Released on {movie.release_date}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray.500">⭐ {movie.vote_average}</Text>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} mt={{base:4,md:8,lg:12}}>Popular TV Shows</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            If u have a lot of free time at holiday,this is the list of all popular serial tv shows u can watch right now ! 
                        </Text>
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {tvpopular.slice(0,16).map((movie,index)=>{
                                return (
                                    <GridItem colSpan={1}>
                                        <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                width="full"
                                                height="full"
                                            >
                                            </Image>
                                            <Box p={{base:1}}>
                                                <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{movie.title}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray.500">⭐ {movie.vote_average}</Text>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }} mt={{base:4,md:8,lg:12}}>Top Rated TV Shows</Heading>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            You confuse about the serial shows that u want to watch? We're gonna list the best tv shows according to rated they got !
                        </Text>
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {tvtoprated.slice(0,16).map((movie,index)=>{
                                return (
                                    <GridItem colSpan={1}>
                                        <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                width="full"
                                                height="full"
                                            >
                                            </Image>
                                            <Box p={{base:1}}>
                                                <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{movie.title}</Text>
                                                <Text fontSize={{base:5,md:10,lg:15}} color="gray.500">⭐ {movie.vote_average}</Text>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                </Container>
            </Layout>
        </>
    )
}

export default Movies
