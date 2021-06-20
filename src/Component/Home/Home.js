import React from 'react';
import Movies from './Movies';
import SelectYourPlan from './SelectYourPlan';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <div>
            <Movies/>
            <SelectYourPlan/>
            <ContactUs/>
        </div>
    );
};

export default Home;