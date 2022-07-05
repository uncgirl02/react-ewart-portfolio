import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


import Home from './pages/Home'
import Projects from './pages/Projects'


const font = "'Rock Salt', cursive";
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: font,
//     }
//   }
// );


function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Routes>
            <Route
              path="/react-ewart-portfolio"
              element={<Home />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
