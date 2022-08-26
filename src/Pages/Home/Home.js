import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Clients from './Clients';
import ContractHome from './ContractHome';
import Form from './Form';
import HomeServices from './HomeServices/HomeServices';
import NewsAndChoose from './NewsAndChoose';
import OtherService from './OtherService';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OtherService></OtherService>
            <Form></Form>
            <HomeServices></HomeServices>
            <ContractHome></ContractHome>
            <Testimonials></Testimonials>
            <Clients></Clients>
            {/* <NewsAndChoose></NewsAndChoose> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;