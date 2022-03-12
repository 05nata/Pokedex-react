import React from "react";
import { Link } from "react-router-dom";

/**
 * Navigation items component
 * @returns {JSX.Element}
 */
const NavItems = () => (
    <div>
        <Link to='/about'>Acerca de</Link>
    </div>
);

export default NavItems;