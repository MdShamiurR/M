import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className="service pb-3">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${description}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>

        </div>
    );
};

export default Service;