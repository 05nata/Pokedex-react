import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PokemonDetails from './components/pages/PokemonDetails';


/**
 * App component 
 * @returns {JSX.Element}
 */
export const App = () => (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/pokemon/:id' element={<PokemonDetails/>} />
    </Routes>
    </BrowserRouter>
);

export default App;