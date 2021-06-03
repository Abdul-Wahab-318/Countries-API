import React ,{useState,useEffect} from 'react'
import './CountryCard.css'
export default function CountryCard(props) {
    let [country,setCountry] = useState(props.country)
    let [name, setName] = useState(fixName(country.name))
    


    function fixName(el)
    {
        return el.split("").map((el,index)=> {
            if(el==" " || el=="(" || el==")")
            el=""

            return el
        }).join("")
    }

   useEffect(()=>{
    
   })
    return (
        <div className="country-card">
            <div className="card-img" style={{"backgroundColor": "white"}}>
                <img src={country.flag} width="100%" alt="" />
                <div className="population">Population: {country.population}</div>
                <div className="cioc">{country.cioc || "none"}</div>
            </div>
            <div className="card-caption">
                <h5>{country.name}</h5>
                <div className="card-caption-details">
                    <span>Region: {country.region}</span>
                    <span>Capital: {country.capital || "none"}</span>
                    <span>Domain: {country.topLevelDomain}</span>
                </div>
            </div>
            <div className="card-tab-parent">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id={`pills-${name}-tab`} data-bs-toggle="pill" data-bs-target={`#${name}`} type="button" role="tab">Borders</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id={`pills-${name}-languages-tab`} data-bs-toggle="pill" data-bs-target={`#${name}-languages`} type="button" role="tab" >Languages</button>
                </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id={`${name}`} role="tabpanel" >{country.borders.map((el,index)=> <span key={index}>{el? el:"none"}</span>)}</div>
                <div className="tab-pane fade language-tab" id={`${name}-languages`} role="tabpanel">{country.languages.map((el,index)=>
                Object.values(el).map((el,index)=> <span key={index}>{el||"none"}</span>))}</div>
                </div>
            </div>
        </div>
    )
}
