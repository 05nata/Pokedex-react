import React from 'react';
import DefaulLayout from 'components/templates/default-layout/DefaultLayout';
import { Link } from 'react-router-dom';

/**
 * Home Component
 * @returns {JSX.Element}
 */
const Home = () => (
    <DefaulLayout title='Home'>
    <h1>Página De Inicio</h1>
    <Link to='/pokemon/pikachu'>Ver detalles de Pikachu</Link>
    </DefaulLayout>
    );

export default Home;