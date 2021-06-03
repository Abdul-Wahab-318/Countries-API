import React, { useState, useEffect } from 'react';
import CountryCard from '../../component/countryCard/CountryCard';
import './Home.css'
function Home() {

    let [countries , setCountries] = useState([])

    let getCountries = ()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then((resp)=> resp.json())
        .then((data)=> setCountries(data))
    }
    




  useEffect(() => {
      getCountries()
  })

    return (
        <div className="home-parent">
            <div className="countries-cards">
                {countries.map((country,index)=> <CountryCard key={index} country={country} />)}
            </div>
        </div>
    )
}


export default Home