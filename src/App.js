import './App.css';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import {Route, Routes} from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/project' element={<Project/>} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </ThemeProvider>
      </>
  );
}

export default App;
