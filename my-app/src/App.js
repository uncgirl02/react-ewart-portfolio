
import React from 'react';
import './App.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const font =  "'Rock Salt', cursive";
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: font,
//     }
//   }
// );


function App() {
  return (
    <ChakraProvider>
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
