import './App.css';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename='/_portfolio'>
            <Routes>
                <Route exact path='/_portfolio' component={Home} />
                <Route path='/project' element={<Project/>} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </>
  );
}

export default App;
