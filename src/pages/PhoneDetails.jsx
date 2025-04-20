import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/button';

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(id))
    console.log(singlePhone)
    const { name, brand, model, image, price, description, storage, camera_info } = singlePhone;
    return (
        <>
            <div>
                <img src={image} alt="" />
                <p>Brnad: {brand}</p>
                <h3 className='text-2xl'>Name: {name}</h3>
                <p>Model: {model}</p>
                <p>Description :{description}</p>
                <p>Camera Info{camera_info}</p>

                <Button lable='Cart'></Button>
                <Button lable='Favorit'></Button>
            </div>
        </>
    );
};

export default PhoneDetails;