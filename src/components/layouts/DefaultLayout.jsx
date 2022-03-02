import React from "react";
import SEO from '../organisms/SEO';
import Header from '../organisms/Header';
import Navigation  from "../organisms/Navigation";
import MainContainer from "../organisms/MainContainer";
import Footer from "../organisms/Footer";

/**
 * Default layout for site.
 * @param {{ children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
export const DefaulLayout = (props) => (
    <>
    <SEO />
    <Header />
    <Navigation />
    <MainContainer>{props.children}</MainContainer>
    <Footer />
    </>
);

export default DefaulLayout;

