import React, { useState } from 'react'
import { Box, Button, Split } from '@aragon/ui'
import MainMenu from '../components/menu/MainMenu'
import './Home.css';  

//Chakra UI - Added by stoner. Mobile compliant if we care about that
//https://chakra-ui.com/getting-started
// We're trying to leverage AragonUI. You won't need another Library.
import {
    Flex,
    Image,
    ButtonGroup,
    Stack,
    Text,
    ThemeProvider 
} from '@chakra-ui/core'

import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

function Home() {
    const [sidePanelOpened, setSidePanelOpened] = useState(false)
    return (
    <ThemeProvider>
        <div>
            <Split
                invert="horizontal"
                secondary={
                    <MainMenu/>
                }
                primary={
                    <Box className="mainContent">
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
                    
                            <ButtonGroup p="4" className="hero-actions">
                                <Link to="/need" style={{ textDecoration: 'none' }}>
                                    {/* <Button 
                                    mr="6" 
                                    variantColor="purple" 
                                    size="lg">
                                    I have a need
                                    </Button> */}
                                    <Button mode="strong" label="I Have A Need" />

                                </Link>
                                <Link to="/supply" style={{ textDecoration: 'none' }}>
                                    {/* <Button 
                                        ml="6"
                                        mr="6" 
                                        variantColor="purple" 
                                        size="lg">
                                        I can supply
                                    </Button> */}
                                    <Button mode="strong" label="I Can Supply" />
                                </Link>
                                <Link to="/voteneed" style={{ textDecoration: 'none' }}>
                                    <Button mode="strong" label="See Votes" />
                                </Link>
                            </ButtonGroup>
                        </Stack>
                    </Box>

                }
                
            />
            
            {/* // Github icon - this looks bad and should be on header instead

            <Box>  
                <FaGithub />
            </Box> */}

        </div>
    </ThemeProvider>
    )
  }
  
  export default Home;