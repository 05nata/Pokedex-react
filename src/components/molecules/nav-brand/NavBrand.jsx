import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from 'assets/img/logo.png';
import './NavBrand.css';

/**
 * Navigation brand component
 * @returns {JSX.Element}
 */
const NavBrand = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className="m-nav-brand" onClick={handleClick}>
            <img className="m-nav-brand__image" src={Logo} alt='Logo de la aplicación' />
            <span className="m-nav-brand__text">POKEDEX_</span>
        </div>
    );
};

export default NavBrand;