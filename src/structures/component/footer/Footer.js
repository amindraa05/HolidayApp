import React from 'react';
import { Box,Container, Text,Grid,GridItem,Link } from '@chakra-ui/react';

export default function Footer(props) {
    return ( 
        <>
            <Box pt="8" pb="8" position="relative" as="footer" textAlign="center" mt={{base:5,md:10,lg:20}} >
            <Container  maxW="6xl" paddingX={{base:7,md:20,lg:30}}>
                {/* <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Responsi Web 3 by Indra Adha</Text> */}
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    templateRows="repeat(1, 1fr)"
                    gap={{base:2,md:4}}
                    w="full"
                    h="full"
                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize={{ base :"8px", md:"lg",lg:"2xl"}} letterSpacing={"0.2rem"} textAlign="start">Holiday!</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">Games</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">Movies</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">Books</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                    <Text fontSize={{ base :"8px", md:"lg",lg:"2xl"}} letterSpacing={"0.1rem"} textAlign="start">About Me</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start"><Link href="https://github.com/amindraa05" isExternal><i class="fab fa-github"></i> Github</Link></Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start"><Link href="https://www.linkedin.com/in/indraadha/" isExternal><i class="fab fa-linkedin"></i> LinkedIn</Link></Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start"><Link href="mailto:amindraa05@mail.ugm.ac.id?Subject=Mau%20tanya" isExternal><i class="far fa-envelope"></i> Email</Link></Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start"><Link href="https://www.instagram.com/aku.indra_/" isExternal><i class="fab fa-instagram"></i> Instagram</Link></Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize={{ base :"8px", md:"lg",lg:"2xl"}} letterSpacing={"0.1rem"} textAlign="start">Indra Adha</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">UI/UX Enthusiast</Text>
                        <Text color="gray" letterSpacing={"0.1rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">Frontend Learner</Text>
                    </GridItem>
                </Grid>
                </Container>
            </Box>
            
        </>
    );
}