import React from "react";
import { Helmet } from "react-helmet";

/**
 * SEO Component
 * @param{{title: string}} props
 * @returns {JSX.Element}
 */
const SEO = (props) => {
    let title = props.title ? `Pokedex - ${props.title}`:'Pokedex';
    return (
    <Helmet>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-widh, initial-scale=1.0'/>
        <title>{title}</title>
        <link rel="favicon" href='/favicon.ico' />
    </Helmet>
)};

export default SEO;