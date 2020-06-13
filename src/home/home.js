import React, { useState } from 'react'
import { Box, Button, Main, Split } from '@aragon/ui'
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
                    <Main>
                    <Box className="mainContent">
                        <section className="hero">
                            <div className="hero-left">
                                <h1>DPR Consortium</h1>
                                <p className="hero-p">
                                An international, cooperative DAO using AI to model, inform and manage global resourcesin reponse to a pandemic.
                                </p>

                                <div className="action-buttons">
                                    <Link to="/supply"><Button mode="strong" label="I Can Help" /></Link>
                                    <Link to="/need" className="btn-strong"><Button mode="strong" class="btn-strong" label="I Have A Need" /></Link>
                                </div>
                            </div>
                            <div className="hero-right">
                                <img src={require('../img/hero.png')} alt="Indigo Theory Flower Logo" className="hero-img"/>
                            </div>
                        </section>
                        
                        <section className="home2">
                            <div className="hero-left">
                                <h2>Suppliers, Manufacturers, Entrepeneurs</h2>
                                <p className="hero-p">
                                Contract Manufacturers (CMO’s) and community supplies. This is A Pandemic Reserve capable of pivoting to supply the tests, equipment, and resources needed to fight a pandemic..
                                </p>
                                <Link to="/supply"><Button mode="strong" label="I Can Help" /></Link>
                            </div>
                            <div className="hero-right">
                                <img src={require('../img/puzzle.png')} alt="Indigo Theory Flower Logo" className="hero-img"/>
                            </div>
                        </section>

                        <section className="home3">
                            <div className="hero-left">
                                <img src={require('../img/puzzle.png')} alt="Indigo Theory Flower Logo" className="hero-img"/>
                                
                            </div>
                            <div className="hero-right">
                                <h2>Suppliers, Manufacturers, Entrepeneurs</h2>
                                <p className="hero-p">
                                Contract Manufacturers (CMO’s) and community supplies. This is A Pandemic Reserve capable of pivoting to supply the tests, equipment, and resources needed to fight a pandemic..
                                </p>
                                <Link to="/need" className="btn-strong"><Button mode="strong" class="btn-strong" label="I Have A Need" /></Link>
                            </div>
                        </section>       
                                
                    </Box>
                    </Main>
                }
                
            />

        </div>
    </ThemeProvider>
    )
  }
  
  export default Home;