import axios from "axios"
export const ADD_NEW_COUNTRY = "ADD_NEW_COUNTRY"


export const addCountry = (newCountryName) => {
    console.log("addCountry action called")
    return {
        type: ADD_NEW_COUNTRY,
        payload: newCountryName
    }
}


export const FETCH_COUNTRIES_START = "FETCH_COUNTRIES_START"
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS"
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE"

// Action Creator
export const fetchCountries = () => (dispatch) => {

    // Dispatch Start
    dispatch({ type: FETCH_COUNTRIES_START })

    // API CALL with axios
    axios.get("http://localhost:3333/countries")
        .then((res) => {
            console.log("returned data", res.data)
            // Dispatch Succes
            dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: res.data })

        })
        .catch((err) => {
            dispatch({ type: FETCH_COUNTRIES_FAILURE, payload: err.message })
        })
}

