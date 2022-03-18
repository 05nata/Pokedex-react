import React from 'react';
import SEO from 'components/organisms/seo/SEO';
import Header from 'components/organisms/header/Header';
import Navigation  from 'components/organisms/navigation/Navigation';
import MainContainer from 'components/organisms/main-container/MainContainer';
import Footer from 'components/organisms/footer/Footer';
import './DefaultLayout.css';

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

