import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, capital, region } = props.country;

    console.log(props.country);

    return (
        <div className="country bg-success">
            <h4 className="text-warning">This is: {name}</h4>
            <p>Capital is: {capital}</p>
            <p>Region is: {region}</p>
        </div>
    );
};

export default Country;