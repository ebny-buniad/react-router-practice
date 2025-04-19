import React from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const phonesData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <PhonesContainer phonesData={phonesData}></PhonesContainer>
        </div>
    );
};

export default Home;