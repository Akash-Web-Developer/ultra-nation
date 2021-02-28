import React from 'react';

const Country = (props) => {
    console.log(props);
    const handleAddToCountry = props.handleAddToCountry;
    const{name, flag, region, population, capital} = props.country;
    const flagStyle = {height:'80px'};
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style = {countryStyle}>
            <h4>I am {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button onClick={() => handleAddToCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;