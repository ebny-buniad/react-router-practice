import React from 'react';
import banner from '../assets/banner.png'

const Hero = () => {
    return (
        <div>
            <div className='space-y-5'>
                <img className='w-4/12 mx-auto mt-10' src={banner} alt="" />
                <h1 className='text-7xl font-thin text-center'>Browse, Search, View, Buy</h1>
                <p className='text-center'>Best place to browse, search, view details and purchase of top flagship phones <br />
                    of the current time - FlagshipFaceOff</p>

                <form className='text-center my-5'>
                    <input type="text" placeholder="Search Phone" className="input" />
                    <button className='btn'><input type="submit" value="" />Search</button>

                    
                </form>
            </div>
        </div>
    );
};

export default Hero;