import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PokemonDetails from './components/pages/PokemonDetails';
import NotFound from './components/pages/NotFound';

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
        <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
);

export default App;