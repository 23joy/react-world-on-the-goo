import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({contriesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([])
    const handleVisitedCountries=(country)=>{
        console.log("the countries click.",country);
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries);
    }
    const countriesData=use(contriesPromise)
    const countries=countriesData.countries;
    return (
        <div>
            <h2>In the world:{countries.length}</h2>
            <h3>Total country i visited:{visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(Country=><li
                    key={Country.cca3.cca3}
                    >{Country.name.common}</li>)
                }
            </ol>
            <div className='Contries'>
                {
                countries.map(country=><Country 
                    key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;