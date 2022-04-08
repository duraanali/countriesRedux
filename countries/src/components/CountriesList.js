import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../actions/CountryActions';
export default function CountriesList() {

    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log('CountriesList: useEffect')
        dispatch(fetchCountries())
    }, [])
    return (
        <div>
            {countries.map(country => (
                <div key={country.name}>
                    <h3>{country.name}</h3>
                    <p>Population: {country.population}</p>
                    <p>Land Area: {country.land_area}</p>
                </div>
        ))}
        </div>
    )
}
