import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR05-UG2wXhFEh9XFBd_YMpD38qM5SqmcDHe9SbBnccatI69t4SJ8hxiZbA')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hello from Countries: {countries.length}</h1>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.capital}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;