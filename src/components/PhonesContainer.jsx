import React, { useEffect, useState } from 'react';
import Phone from './Phone';
import Button from './ui/button';

const PhonesContainer = ({ phonesData }) => {
    // console.log(phonesData)

    const [displayPhones, setDisplayPhones] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) {
            setDisplayPhones(phonesData);
        }
        else {
            setDisplayPhones(phonesData.slice(0, 6));
        }

    }, [phonesData, showAll])

    return (
        <div>
            <h4 className='my-5 text-xl font-semibold'>Total Phone: {phonesData.length}</h4>

            <div className='grid grid-cols-3 gap-5'>
                {
                    displayPhones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>

            {/* <button onClick={() => {
                setShowAll(!showAll)
                if (showAll) window.scrollTo(0, 0)
            }} className='btn my-5'>{showAll ? 'Show less' : 'Show All'}</button> */}

            <Button onClick={() => {
                setShowAll(!showAll)
                if (showAll) window.scrollTo(0, 0)
            }} lable={showAll ? 'Show less' : 'Show All'}></Button>
        </div>
    );
};

export default PhonesContainer;