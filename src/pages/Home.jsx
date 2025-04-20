import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const phonesData = useLoaderData();
    const [phones, setPhones] = useState(phonesData)

    const handelSearch = (e, searchText) => {
        e.preventDefault();
        if (searchText === '') return setPhones(phonesData)
        const searchedPhones = phonesData.filter(phoneData =>
            phoneData.name.toLowerCase().split(" ").includes(searchText.toLowerCase()) ||
            phoneData.brand.toLowerCase().split(" ").includes(searchText.toLowerCase()));
        setPhones(searchedPhones)
    }

    return (
        <div>
            <Hero handelSearch={handelSearch}></Hero>
            <PhonesContainer phonesData={phones}></PhonesContainer>
        </div>
    );
};

export default Home;