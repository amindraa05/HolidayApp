import React from 'react';
import { Box,Container, Text,Grid,GridItem } from '@chakra-ui/react';

export default function Footer(props) {
    return ( 
        <>
            
            
            <Box pt="8" pb="8" bottom="0" position="relative" as="footer" textAlign="center" mt={{base:3,md:5,lg:10}} >
            <Container  maxW="6xl" paddingX={{base:7,md:20,lg:30}}>
                {/* <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Responsi Web 3 by Indra Adha</Text> */}
                <Grid
                    templateColumns="repeat(2, 1fr)"
                    templateRows="repeat(1, 1fr)"
                    gap={{base:2,md:4}}
                    w="full"
                    h="full"
                >
                    <GridItem rowSpan={1} colSpan={1}>
                        <Text fontSize={{ base :"8px", md:"lg",lg:"2xl"}} letterSpacing={"0.2rem"} textAlign="start">Muhammad Indra Adha</Text>
                        <Text color="gray" letterSpacing={"0.3rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">UI/UX Enthusiast</Text>
                        <Text color="gray" letterSpacing={"0.3rem"} fontSize={{ base :"8px", md:"md",lg:"xl"}} textAlign="start">Frontend Learner</Text>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                        
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>

                    </GridItem>
                </Grid>
                </Container>
            </Box>
            
        </>
    );
}