import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer(props) {
    return ( 
        <>
            <Box pt="4" pb="4" bottom="0" position="relative" as="footer" textAlign="center">
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base :"xs", md:"sm"}} fontWeight="medium">Responsi Web 3 by Indra Adha</Text>
            </Box>
        </>
    );
}