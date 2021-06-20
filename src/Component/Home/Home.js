import React from 'react';
import Movies from './Movies';
import SelectYourPlan from './SelectYourPlan';
import ContactUs from './ContactUs';
import Slide from './Slide';

const Home = () => {
    return (
        <div>
            <Movies/>
            <SelectYourPlan/>
            <ContactUs/>
            <Slide/>
        </div>
    );
};

export default Home;