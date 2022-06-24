import React from 'react';
import './App.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
      <Header></Header> 
        <main>
          <AboutMe></AboutMe>
          <Project></Project>
          <ContactForm></ContactForm>
        </main>
      <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
