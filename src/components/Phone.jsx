import React from 'react';
import { Link } from 'react-router';

const Phone = ({ phone }) => {

    const { name, image, description, id } = phone;



    return (
        <>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Phone" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/phone-details/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Phone;