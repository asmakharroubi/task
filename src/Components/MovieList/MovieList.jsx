import React, { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
 import "./MovieList.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeDone } from "../../Redux/Actions/Action";
import movieList from "../../Redux/Reducers/MovieReducer";

const MovieList = () => {
  const movies = useSelector((state) => state.MovieReducer.movieList);
  const [list, setList] = useState(movies);
  
  return (
    <div className="movieslist">

      <div className="movies">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
