import React from 'react';
import NavBrand from '../../molecules/nav-brand/NavBrand';
import NavItems from '../../molecules/nav-items/NavItems';
import './Navigation.css';

/**
 * Navigation Component
 * @returns {JSX.Element}
 */
const Navigation = () => (
<nav className='o-navigation'>
    <NavBrand/>
    <NavItems/>
</nav>
);

export default Navigation;