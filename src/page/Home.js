import React, { useState,useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import Layout from '../structures/component/layout/Layout';
import { Box, Text, Container, Grid, GridItem, Heading,Image,Flex, IconButton,Button,Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Controller from '../assets/images/controller.png'
import Movieclip from '../assets/images/video-player.png'
import Books from '../assets/images/read.png'
import Travel from '../assets/images/globe.png'
import Chill from '../assets/images/chill-out.png'

function Home(props) {

    const [games, setgames] = useState([])
    const [movies, setmovies] = useState([])
    const [books, setbooks] = useState([])
    const getGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'battle-royale'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            let data = response.data
            setgames(data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    const getMovies = ()=>{
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=00bd304b5f9f9b4cc3d0bf80d91aa475&language=en-US&page=1')
        .then((res)=>{
            setmovies(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }
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
        getGames()
        getMovies()
        getBooks()
    }, [])
    return (
        <>
            <Layout>
                <Container maxW="6xl" paddingX={{base:7,md:20,lg:30}} paddingTop={{base:40,md:40,lg:40}}>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Heading maxW="950px" as="h1" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }} textAlign="start">
                            Holiday incoming ! Get ur new games,movies,or even books to enjoy 🎉🎈
                        </Heading>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Grid
                            justifyContent="center"
                            mt={{base:6,md:15,lg:20}}
                            templateColumns="repeat(5,1fr)"
                            gap={{base:6,md:10}}
                        >
                            <GridItem colSpan={1}>
                                <Image
                                    src={Controller}
                                ></Image>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Image
                                    src={Movieclip}
                                ></Image>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Image
                                    src={Books}
                                ></Image>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Image
                                    src={Travel}
                                ></Image>
                            </GridItem>
                            <GridItem colSpan={1}>
                                <Image
                                    src={Chill}
                                ></Image>
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} delay={340} bottom>
                        <Box mt={{base:10,md:20,lg:20}}>
                            <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Free to Play Games</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                Feels bored? Cant go out bcz of this covid thing? U can get these free-to-play games on ur PC.Choose ur favorite type of game, shooter, RPG, strategy?
                                you can download all of that for free !
                            </Text>
                        </Box>
                    </Fade>
                    <Fade >
                    <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {games.slice(0,8).map((game,index)=>{
                                return(
                                    <GridItem colSpan={1}>
                                    <Box maxW="full" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:0,md:3}}>
                                        <Image 
                                            src={game.thumbnail}
                                            boxSize="300px"
                                            objectFit="cover"
                                            width="full"
                                            height="full"
                                        >
                                        </Image>
                                        <Box p={{base:1}}>
                                            <Text fontSize={{base:5,md:13,lg:20}} letterSpacing="wide">{game.title}</Text>
                                            <Text fontSize={{base:5,md:15,lg:20}} color="gray.500">{game.genre}</Text>
                                            <Text fontSize={{base:5,md:15,lg:20}}><Link href={game.game_url} isExternal color="teal">Download<ExternalLinkIcon mx="2px" /></Link></Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                        
                    <Fade duration={700} distance="30px" fraction={0.4} delay={340} bottom>
                        <Box mt={{base:10,md:20,lg:20}}>
                            <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Trending Movies</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                Dont like to play games?its completely fine,u can enjoy ur holiday by listing ur movies watchlist to fullfill ur day !
                                Here's all the popular movies these days u can watch !
                            </Text>
                        </Box>
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:8}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {movies.slice(0,8).map((movie,index)=>{
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
                                                <Text fontSize={{base:5,md:15,lg:20}} color="gray.500">⭐ {movie.vote_average}</Text>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                )
                            })}
                        </Grid>
                    </Fade>
                        
                    <Fade duration={700} distance="30px" fraction={0.4} delay={340} bottom>
                        <Box mt={{base:10,md:20,lg:20}}>
                            <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Popular NYTimes Books</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                Tired of playing games/watching movies ? Maybe its better for u to read several books that NYTimes recommended you,
                                Here's the lists !
                            </Text>
                        </Box>
                    </Fade>
                    <Fade>
                    <Grid
                        mt={{base:4,md:8}}
                        templateColumns="repeat(4, 1fr)"
                        gap={5}
                        w="full"
                        h="full"
                    >
                        {books.slice(0,4).map((book,index)=>{
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
                    </Fade>
                    
                </Container>
            </Layout>
        </>
    )
}

export default Home
