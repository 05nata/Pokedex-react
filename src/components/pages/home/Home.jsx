import React from 'react';
import DefaulLayout from 'components/templates/default-layout/DefaultLayout';
import { Link } from 'react-router-dom';

/**
 * Home Component
 * @returns {JSX.Element}
 */
const Home = () => (
    <DefaulLayout title='Home'>
    <h1 className='p-home-name'>Página De Inicio</h1>
    <Link className='p-home-link' to='/pokemon/pikachu'>Ver detalles de Pokemon</Link>
    <img src='' alt='Imagen de bienvenida'/>
    </DefaulLayout>
    );

export default Home;