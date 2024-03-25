

import React, { useState } from "react";
  import "./Movie.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux"; 


const Movie = ({ movie }) => {
  
  return (
    <div className="movie-card ">
      <img src={movie.img} alt={movie.title} className="movie-cover" />
      <h1 className="movie-title"> {movie.title} </h1>

      
    </div>
  );
};

export default Movie;

