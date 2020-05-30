import React, { useState } from 'react'
import { Main,  SidePanel } from '@aragon/ui'
import Header from './components/Header.js'
import VoteNeed from './VoteNeed/VoteNeed'
import VoteDetail from './VoteNeed/VoteDetail';
import Home from './home/home'
import './App.css';
// import { Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App;
