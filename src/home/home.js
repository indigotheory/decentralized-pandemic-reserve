import React, { useState } from 'react'
import { Main } from '@aragon/ui'
//import './home.css';  //Should this change to Home.css? TODO: Find consistent themeing

//Chakra UI - Added by stoner. Mobile compliant if we care about that
//https://chakra-ui.com/getting-started
// We're trying to leverage AragonUI. You won't need another Library.
import {
    Box,
    Flex,
    Image,
    Button,
    ButtonGroup,
    Stack,
    Text,
    ThemeProvider 
} from '@chakra-ui/core'

import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function Home() {
    return (
    <ThemeProvider>
        <Main>
            <Box pt={[4]} m={[6]}>
                <Stack spacing={4} align="center">
                    <Flex align="center">
                        <Image
                            src={require('../img/logo.png')}
                            size={384}
                            fallbackSrc='https://github.com/indigotheory/DPR-MarketPlace/raw/master/img/icon_sq.png'
                            alt=''
                        />
                    </Flex>
            
                    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Oswald:400,700" media="screen" /> 
                    <Text fontSize="40px" fontFamily="Oswald" display="flex" fontWeight="bold" justifyContent="center" alignContent="center">DECENTRALIZED PANDEMIC RESERVE</Text>
            
                    <ButtonGroup p="4">
                        <Link to="/need" style={{ textDecoration: 'none' }}>
                            <Button 
                            mr="6" 
                            variantColor="purple" 
                            size="lg">
                            I have a need
                            </Button>
                        </Link>
                        <Link to="/supply" style={{ textDecoration: 'none' }}>
                            <Button 
                                ml="6"
                                mr="6" 
                                variantColor="purple" 
                                size="lg">
                                I can supply
                            </Button>
                        </Link>
                        <Link to="/voteneed" style={{ textDecoration: 'none' }}>
                            <Button 
                                ml="6" 
                                variantColor="purple" 
                                size="lg">
                                See votes
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Stack>
            </Box>

            {/* // Github icon - this looks bad and should be on header instead

            <Box>  
                <FaGithub />
            </Box> */}

        </Main>
    </ThemeProvider>
    )
  }
  
  export default Home;