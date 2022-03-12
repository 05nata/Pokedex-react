import React from "react";
import { Link } from "react-router-dom";
import './NavItems.css';

/**
 * Navigation items component
 * @returns {JSX.Element}
 */
const NavItems = () => (
    <div className="m-nav-items">
        <Link className="m-nav-items__item" to='/about'>Acerca de</Link>
    </div>
);

export default NavItems;