import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Navigation brand component
 * @returns {JSX.Element}
 */
export const NavBrand = () => {
    let navigate = useNavigate ();
    const handleClick = () => {
        navigate ('/');
    }
  return(
    <div onClick={handleClick}>
        <img src="" alt="Logo de la aplicación"/>
        <span>POKEDEX_</span>
    </div>
  );
};

export default NavBrand;