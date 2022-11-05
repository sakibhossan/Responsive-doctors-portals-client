import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import FormControl from './FormControl';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info ></Info>
            <Services/>
            <MakeAppointment/>
            <Testimonial/>
            <FormControl></FormControl>
            <Footer></Footer>
        </div>
    );
};

export default Home;