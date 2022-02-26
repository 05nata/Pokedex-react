import React from "react";
import { Helmet } from "react-helmet";

/**
 * SEO Component
 * @returns {JSX.Element}
 */
export const SEO = () => (
    <Helmet>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-widh, initial-scale=1.0'/>
        <title>Pokedex</title>
    </Helmet>
);

export default SEO;