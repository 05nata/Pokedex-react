import React from "react";
import { Link } from "react-router-dom";
import PropTypes  from "prop-types";
import './NavItems.css';

/**
 * Navigation items component
 * @param {{items: {text: string, target: string}[]}} props
 * @returns {JSX.Element}
 */
const NavItems = (props) => {
    /**
     * Build single item for navigation
     * @param {{text: string, target: string}} value
     * @param {number} index
     * @returns {JSX.Element}
     */
const buildItem = (value, index) => (
    <Link className="m-nav-items__item" to={value.target} key={index}>
        {value.text}
    </Link>
);
    /**
     * Build navigation items for navbar
     * @param {{text: string, target: string}[]} items 
     * @returns {JSX.Element}
     */
const buildItems = () => (props.items ? props.items.map(buildItem) : <></> );
    return <div className="m-nav-items">{buildItems()}</div>;
};

NavItems.propTypes = {
    items: PropTypes.shape({
        text: PropTypes.string,
        target: PropTypes.string,
    }),
};

export default NavItems;