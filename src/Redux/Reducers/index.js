// import {combineReducers} from 'redux'
// import FilmReducer from './FilmReducer'

// const rootReducer = combineReducers ({FilmReducer})

// export default rootReducer 


import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
const rootReducer = combineReducers({ MovieReducer });

export default rootReducer;