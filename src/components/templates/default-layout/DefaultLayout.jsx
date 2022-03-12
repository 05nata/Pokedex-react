import React from 'react';
import SEO from '../../organisms/seo/SEO';
import Header from '../../organisms/header/Header';
import Navigation  from '../../organisms/navigation/Navigation';
import MainContainer from '../../organisms/main-container/MainContainer';
import Footer from '../../organisms/footer/Footer';

/**
 * Default layout for site.
 * @param {{ children: React.ReactNode, title: string}} props
 * @returns {JSX.Element}
 */
const DefaulLayout = (props) => (
    <>
    <SEO title={props.title} />
    <Header />
    <Navigation />
    <MainContainer>{props.children}</MainContainer>
    <Footer />
    </>
);

export default DefaulLayout;

