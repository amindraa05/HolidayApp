import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer(props) {
    return ( 
        <>
            <Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Praktikum Web 3 2021</Text>
            </Box>
        </>
    );
}