import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
    PseudoBox,
    Stack,
    Text,
    ThemeProvider 
} from '@chakra-ui/core'


function Home() {
    return (
    <ThemeProvider>
        <Main>
            <Box pt={[2]} m={[4]}>
                <Stack spacing={4} align="center">
            <Flex align="center">
                <Image
                    //TODO: Figure out why src isn't working, but fallback does 
                    src={'../img/logo.png'}
                    size={384}
                    fallbackSrc='https://github.com/indigotheory/DPR-MarketPlace/raw/master/img/icon_sq.png'
                    alt=''
                />
            </Flex>
            
            {/* TODO: Theme this text with Oswald font */}
            
            <Flex>
                <Box mt="2">
                    <Text fontSize="32px">Welcome to</Text>
                    <Text fontSize="40px">the Decentralized Pandemic Reserve</Text>
                </Box>
            </Flex>
            <ButtonGroup p="4">
                <Link to="/need">
                    <Button 
                    mr="6" 
                    variantColor="purple" 
                    size="lg">
                    I have a need
                    </Button>
                </Link>
                <Link to="/supply">
                    <Button 
                        ml="6"
                        mr="6" 
                        variantColor="purple" 
                        size="lg">
                        I can supply
                    </Button>
                </Link>
                <Link to="/voteneed"><Button 
                    ml="6" 
                    variantColor="purple" 
                    size="lg">
                    See votes
                </Button></Link>
            </ButtonGroup>
        </Stack>
            </Box>
      </Main>
      </ThemeProvider>
    )
  }
  
  export default Home;