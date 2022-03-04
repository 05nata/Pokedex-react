import React from "react";
import DefaulLayout from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";

/**
 * Home Component
 * @returns {JSX.Element}
 */
export const Home = () => (
    <DefaulLayout>
    <h1>Página De Inicio</h1>
    <Link to='/pokemon/1'>Enlace dummy de acceso a detalles de pokemon</Link>
    </DefaulLayout>
    );

export default Home;