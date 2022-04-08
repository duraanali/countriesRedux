import {
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,

  ADD_NEW_COUNTRY,
} from '../actions/CountryActions';

const initialState = 
  {
    countries: [],
  }

export const countryReducer = (state = initialState, action) => {
  // Switch Statement, check if state changed
  console.log(action.payload)
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        error: null

      };
      case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
      case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: action.payload

      };
      case ADD_NEW_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, action.payload]

      };
    default:
      return state;
  }
};
