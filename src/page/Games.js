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

function Games() {

    const [shooter, setshooter] = useState([])
    const [battle, setbattle] = useState([])
    const [sports, setsports] = useState([])
    const [horror, sethorror] = useState([])

    const shooterGames = () =>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'shooter'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            setshooter(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const battleRoyaleGames = ()=>{
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
            setbattle(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const sportsGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'sports'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            setsports(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    const horrorGames = ()=>{
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            params: {category: 'horror'},
            headers: {
              'x-rapidapi-key': '1060a4bc98mshabfda103e8cbddbp18de8ejsn0c5f73310db3',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            sethorror(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        shooterGames()
        battleRoyaleGames()
        sportsGames()
        horrorGames()
    }, [])


    return (
        <>
            <Layout>
                <Container maxW="6xl" paddingX={{base:7,md:20,lg:30}} paddingTop={{base:40,md:40,lg:40}}>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                            <Heading as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Best of The Best</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                This is the one and only game that i really love,the only game that really challenge me,at the same time make me better player. Download it NOW !
                            </Text>
                            <Text fontSize={{ base: "md", md: "2xl", lg: "4xl" }} mt={{base:3,md:5}}>DOTA 2</Text>
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
                            <GridItem rowSpan={2} colSpan={1}>
                                <Box maxW="560px" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}}>
                                    <AspectRatio ratio={1}>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/38ZwPC3xO78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </AspectRatio>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box maxW={{base:"150px",md:"300px",lg:"450px"}} borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}}>
                                    <Image src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg" alt="dota2" objectFit="cover"></Image>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Text maxW={{base:"0",md:"450px",lg:"450px"}} fontSize={{ base: "0", md: "0", lg: "lg" }} textAlign="justify"> Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now</Text>
                                <Text maxW={{base:"150px",md:"300px",lg:"0"}} fontSize={{ base: "7px",md:"xs", lg: "0" }} textAlign="justify"> Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover.Free to play.</Text>
                                <Text fontSize={{ base: "7px",md:0, lg:0 }}>You can <Link href="https://store.steampowered.com/app/570/Dota_2/" isExternal color="teal" >Download it Now !<ExternalLinkIcon mx="2px" /></Link></Text>
                                <Text maxW={{base:"0",md:"0",lg:"450px"}} fontSize={{ base: "0", md: "0", lg: "lg" }} color="gray">Released on 10 Jul,2013</Text>
                                <Text maxW={{base:"0",md:"0",lg:"450px"}} fontSize={{ base: "0", md: "0", lg: "lg" }} mb={{base:0,md:2,lg:2}} color="gray">Valve as a Publisher and Developer</Text>
                                <Tag fontSize={{ base: "0", md: "xs", lg: "lg" }} size={{base:0,md:"lg",lg:"lg"}} padding={{base:0,md:1,lg:1}} marginEnd={{base:0,md:1}}>Free to Play</Tag><Tag fontSize={{ base: "0", md: "xs", lg: "lg" }} size={{base:0,md:"lg",lg:"lg"}} padding={{base:0,md:1,lg:1}} marginEnd={{base:0,md:1}}>MOBA</Tag><Tag fontSize={{ base: "0", md: "xs", lg: "lg" }} size={{base:0,md:"lg",lg:"lg"}} padding={{base:0,md:1,lg:1}}>Multiplayer</Tag>
                                <Heading maxW={{base:"0",md:"450px",lg:"450px"}} fontSize={{ base: "0", md: "xl", lg: "2xl" }} mt={{base:0,md:2,lg:3}}><Link href="https://store.steampowered.com/app/570/Dota_2/" isExternal color="teal" >Download it Now !<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                        </Grid>
                    </Fade>
                </Container>
            </Layout>
        </>
    )
}

export default Games
