import axios from "axios";
import React, { useEffect } from "react";
import Movie from "../Movies";
import { useSelector, useDispatch } from "react-redux";
import { changeMovie } from "../../../redux/Slices/movieSlice";

function Discover() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=2384938f56f2d5e077d35a9f4274b76f`
  );

  useEffect(() => {
    dispatch(changeMovie([]));

    movieDetails.then((res) => {
      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movie">
      <h2 className="moviesTitle">Discover</h2>
      <div className="movie">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Discover;