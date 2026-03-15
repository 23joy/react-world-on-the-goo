import React, { useState } from 'react';
import './Country.css'

const Country = ({ country ,handleVisitedCountries}) => {
    const[visted,setVisited]=useState(false);

    //console.log(handleVisitedCountries);

//  console.log(country.languages.languages)
    const handleVisited=()=>{
        //1st system
        // setVisited(true)
        //basic system
        // if(visted){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        //  }

        //2nd system
        // setVisited(visted?false:true)

        // 3rd syetem
        setVisited(!visted)
        handleVisitedCountries(country)

    }
    return (
        <div className={`Country ${visted&&"Country-visited"}`}>
           <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
           <h1>Name:{country.name.common} </h1>
           <p>Area:{country.area.area>300000?"Big country":"Small country"}</p>
           <p>capital:{country.capital.capital} </p>
           <p>continents:{country.continents.continents} </p>
           <p>Region:{country.region.region}</p>
           <p>Languages:{}</p>
           <button onClick={handleVisited}>{visted? 'visited':'NOt Visited'}</button>
        </div>
    );
};

export default Country;