import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import ContactUs from '../ContactUs/ContactUs';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import CategorySection from '../CategorySection/CategorySection';
import useTitleSet from '../../../hooks/useTitleSet';

const Home = () => {
    // routing coming from hook js
    useTitleSet("home")
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategorySection></CategorySection>
            <About></About>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;