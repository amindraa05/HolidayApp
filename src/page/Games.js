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
                    <Fade duration={700} distance="30px" fraction={0.4} bottom >
                            <Heading bottom mt={{base:0,md:0,lg:10}} as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>First/Third-Person Shooter</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            Shooter video games or shooters are a subgenre of action video games where the focus is almost entirely on the defeat of the character's enemies using the weapons given to the player
                            </Text>
                            <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} color="gray" mt={{base:1,md:2,lg:3}}>My Two Favorites</Text>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Grid
                            mt={{base:3,md:3}}
                            templateColumns="repeat(4, 1fr)"
                            templateRows="repeat(1, 1fr)"
                            gap={{base:2,md:4}}
                            w="full"
                            h="full"
                        >
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}} maxW={{base:"70px",md:"150px",lg:"450px"}}>
                                    <Image src="https://wallpaperaccess.com/full/4962535.jpg" objectFit="cover" alt="valo1"></Image>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Heading fontSize={{base:"sm",md:"2xl",lg:"4xl"}}>Valorant</Heading>
                                <Text color="gray" fontSize={{base:"10px",md:"lg",lg:"xl"}}>First-Person Shooter</Text>
                                <Text fontSize={{base:0,md:0,lg:"md"}} textAlign="justify">A team-based first-person hero shooter set in the near future. Players play as one of a set of agents, characters designed based on several countries and cultures around the world.
                                players are assigned to either the attacking or defending team with each team having five players on it.</Text>
                                <Text color={{base:"",md:"",lg:"gray"}} fontSize={{base:"7px",md:"md",lg:"lg"}} fontFamily="cursive" mt={{base:1,md:2,lg:4}}>Published by RIOT GAMES</Text>
                                <Text color={{base:"",md:"",lg:"gray"}} fontSize={{base:"7px",md:"md",lg:"lg"}} fontFamily="cursive">Released On 02 June 2020</Text>
                                <Heading mt={{base:1,md:2,lg:2}} fontSize={{base:"8px",md:"md",lg:"2xl"}}><Link href="https://playvalorant.com/id-id/?wpcid=10161921806&wpsnetn=g&wpkwn=fortnite&wpkmatch=b&wpcrid=440393859037&wpscid=101816377837&wpkwid=kwd-307535882297&an=Google%20AdWords&gclid=Cj0KCQjw_dWGBhDAARIsAMcYuJwfPoUrKAXm5gllJ2k6RbE-ob_vMOTS_qTmK0MeufLy-907pr1A5k0aAsK_EALw_wcB" isExternal color="teal" >Download Now<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={{base:1,md:2}} maxW={{base:"70px",md:"150px",lg:"450px"}}>
                                    <Image src="https://i.pinimg.com/originals/85/16/a4/8516a4b4e06ff96a060f1de6e189ef03.jpg" objectFit="cover" alt="valo1"></Image>
                                </Box>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                                <Heading fontSize={{base:"sm",md:"2xl",lg:"4xl"}}>Fortnite</Heading>
                                <Text color="gray" fontSize={{base:"10px",md:"lg",lg:"xl"}}>First-Person Shooter</Text>
                                <Text fontSize={{base:0,md:0,lg:"md"}} textAlign="justify">A survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive. There are an estimated 125 million players on Fortnite.</Text>
                                <Text color={{base:"",md:"",lg:"gray"}} fontSize={{base:"7px",md:"md",lg:"lg"}} fontFamily="cursive" mt={{base:1,md:2,lg:4}}>Published by EPIC GAMES</Text>
                                <Text color={{base:"",md:"",lg:"gray"}} fontSize={{base:"7px",md:"md",lg:"lg"}} fontFamily="cursive">Released On 02 July 2017</Text>
                                <Heading mt={{base:1,md:2,lg:2}} fontSize={{base:"8px",md:"md",lg:"2xl"}}><Link href="https://www.epicgames.com/fortnite/en-US/download" isExternal color="teal" >Download Now<ExternalLinkIcon mx="2px" /></Link></Heading>
                            </GridItem>
                        </Grid>
                    </Fade>
                    <Fade duration={700} distance="30px" fraction={0.4} bottom>
                        <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} color="gray" mt={{base:3,md:5,lg:10}}>F2P Shooter Games</Text>
                        <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            Here's all free to play games that u can download right now
                        </Text>
                    </Fade>
                    <Fade>
                        <Grid
                            mt={{base:4,md:5}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {shooter.slice(0,24).map((game,index)=>{
                                return (
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
                    <Fade duration={700} distance="30px" fraction={0.4} bottom >
                            <Heading bottom mt={{base:5,md:6,lg:10}} as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Battle-Royale Games</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                An online multiplayer video game genre that blends last-man-standing gameplay with the survival, exploration and scavenging elements of a survival game.
                            </Text>
                            {/* <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} color="gray" mt={{base:1,md:2,lg:3}}>My Two Favorites</Text> */}
                    </Fade>
                    <Fade>
                        <Grid
                            mt={{base:4,md:5}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {battle.map((game,index)=>{
                                return (
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
                    <Fade duration={700} distance="30px" fraction={0.4} bottom >
                            <Heading bottom mt={{base:5,md:6,lg:10}} as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Sports Games</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                                A subgenre within simulations focused on the practice of traditional sports, including team sports, athletics, and extreme sports.
                            </Text>
                            {/* <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} color="gray" mt={{base:1,md:2,lg:3}}>My Two Favorites</Text> */}
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:5}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {sports.map((game,index)=>{
                                return (
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
                    <Fade duration={700} distance="30px" fraction={0.4} bottom >
                            <Heading bottom mt={{base:5,md:6,lg:10}} as="h2" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} color="GrayText" fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>Horror Games</Heading>
                            <Text letterSpacing={"-.0.01rem"} lineHeight={"-.0.001rem"} textAlign={{ base: "justify" }} fontSize={{ base: "xs", md: "xs", lg: "lg" }} maxW="4xl">
                            A video game genre centered on horror fiction and typically designed to scare the player. Horror games are nearly always based on narrative or visual presentation, and use a variety of gameplay types
                            </Text>
                            {/* <Text fontSize={{ base: "sm", md: "lg", lg: "2xl" }} color="gray" mt={{base:1,md:2,lg:3}}>My Two Favorites</Text> */}
                    </Fade>
                    <Fade>
                    <Grid
                            mt={{base:4,md:5}}
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="full"
                            h="full"
                        >
                            {horror.map((game,index)=>{
                                return (
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
                </Container>
            </Layout>
        </>
    )
}

export default Games
