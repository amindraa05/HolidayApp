import React from 'react';
import { Box, Heading, Flex, useColorMode, IconButton, Button, useDisclosure, Spacer } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
    Divider
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import SoundClick from '../../../assets/sounds/pop.mp3'

function Header(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [play] = useSound(SoundClick);

    const changeDarkMode = () => {
        play();
        toggleColorMode();
    }

    return ( 
        <>
        <Flex
            as="header"
            align="center"
            position="fixed"
            zIndex="9999"
            padding="1.5rem"
            width="full"
            bg={colorMode === "light" ? "white" : "gray.800"}
            color={colorMode === "light" ? "black" : "white"}
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base: "sm", md: "md", sm: "md", lg: "md" }}>
                    Holiday
                </Heading>
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                    pl="12"
                >
                    <Button 
                        mt={{ base: 5, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                    >
                    <Link to="/">Home</Link> 
                    </Button>
                    <Button 
                        mt={{ base: 5, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                    >
                    <Link to="/games">Free Games</Link> 
                    </Button>
                    <Button 
                        mt={{ base: 5, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                    >
                    <Link to="/movies">Movies</Link> 
                    </Button>
                    <Button 
                        mt={{ base: 5, md: 0 }} 
                        mr={6} 
                        display="block" 
                        size="xs" 
                        backgroundColor="transparent" 
                    >
                    <Link to="/books">Books</Link> 
                    </Button>
                </Box>
            </Flex>
           
            <Spacer />
            <Box
                display={{ base: "none", md: "flex" }}
                mt={{ base: 4, md: 0 }}
                alignContent="center"
            >
                <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={changeDarkMode} aria-label="button" />
            </Box>
            <Box display={{ base: "block", md: "none", lg: "none" }}>
                <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={changeDarkMode} aria-label="button" />
                <Button size="xs" bg="transparent" onClick={onOpen}>⛔ⓂⒺⓃⓊ</Button>
            </Box>
        </Flex>
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            size="xs"
            motionPreset="slideInBottom"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <Flex
                        align="center"
                        width="full"
                        wrap="wrap"
                        heigth="full"
                    >
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"> <Link to="/">Home</Link> </Text>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/games">Free Games</Link> </Text>
                        </Box>
                        <Spacer />
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/movies">Movies</Link> </Text>
                        </Box>
                        <Divider />
                        <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                            <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/books">Books</Link> </Text>
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    );
}
 
export default Header;