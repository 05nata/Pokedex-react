import React from "react";
import { NavBrand } from "../molecules/NavBrand/NavBrand";
import NavItems from "../molecules/NavItems";

/**
 * Navigation Component
 * @returns {JSX.Element}
 */
export const Navigation = () => (
<nav className='o-navigation'>
    <NavBrand/>
    <NavItems/>
</nav>
);

export default Navigation;