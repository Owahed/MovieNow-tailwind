import React from 'react';
import Movies from './Movies';
import SelectYourPlan from './SelectYourPlan';
import ContactUs from './ContactUs';
import Slide from './Slide';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Movies/>
            <SelectYourPlan/>
            <ContactUs/>
            <Slide/>
            <Footer/>
        </div>
    );
};

export default Home;