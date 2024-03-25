// import {ADD_FILM} from "../Constants/Action-type" 


// export const addFilm=(payload)=>{
//     return {
//         type: ADD_FILM,
//         payload: payload,
//     }
// }

import { ADD_Movie } from "../Constants/Action-type";
import { EDIT_Movie, CHANGE_DONE } from "../Constants/Action-type";

export const addMovie = (payload) => {
  return {
    type: ADD_Movie,
    payload: payload,
  };
};

export const editMovie = (payload) => {
  return {
    type: EDIT_Movie,
    payload: payload,
  };
};

export const changeDone = (payload) => {
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};

 