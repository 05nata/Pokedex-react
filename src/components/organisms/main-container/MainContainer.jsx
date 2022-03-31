import React from "react";

/**
 * Main Container Component
 * @param {{ children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
const MainContainer = (props) => (
<main className='o-main-container'>
    {props.children}
</main>
);

export default MainContainer;