import React, { useState } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { addCountry } from '../actions/CountryActions'
export default function Form() {

    // Step: State lagu keydiyo waxa form-ka lagu qoro

    const initialFormState = {
        name: "",
        population: "",
        land_area: "",

    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (event) => {

        const inputData = {
            ...formState,

            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }

        setFormState(inputData)
    }


    // Handle Submit
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        // Controlled Component
        event.preventDefault()
        dispatch(addCountry(formState))
        setFormState(initialFormState)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />

                </label>

                <label htmlFor="email">
                    Population
                    <input
                        type="text"
                        name="population"
                        value={formState.population}
                        onChange={handleChange}
                    />

                </label>


                <label htmlFor="email">
                    Land Area
                    <input
                        type="text"
                        name="land_area"
                        value={formState.land_area}
                        onChange={handleChange}
                    />

                </label>




                <button type="submit">
                    Add Country
                </button>
            </form>


        </div>
    );
}
