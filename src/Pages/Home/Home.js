import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Form from './Form';
import OtherService from './OtherService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OtherService></OtherService>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;