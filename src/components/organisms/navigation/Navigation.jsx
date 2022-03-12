import React from 'react';
import NavBrand from 'components/molecules/nav-brand/NavBrand';
import NavItems from 'components/molecules/nav-items/NavItems';
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