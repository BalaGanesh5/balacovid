import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css'
import { Countries } from '../../api'


const CountryPicker = ({handleChange}) => {

    const [countries, setfetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setfetchedCountries(await Countries());
        }
        fetchAPI();
    }, [setfetchedCountries]);
    // console.log(countries);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleChange(e.target.value)} >
                <option value='global'>Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    )
}
export default CountryPicker;
