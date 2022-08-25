import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContractHome from './ContractHome';
import Form from './Form';
import HomeServices from './HomeServices/HomeServices';
import OtherService from './OtherService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OtherService></OtherService>
            <Form></Form>
            <HomeServices></HomeServices>
            <ContractHome></ContractHome>
            <Footer></Footer>
        </div>
    );
};

export default Home;