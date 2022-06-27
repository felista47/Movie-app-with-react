import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMovie } from "../../../redux/Slices/movieSlice";
import Movie from "../Movies";

function NewReleases() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=2384938f56f2d5e077d35a9f4274b76f&language=en-US`
  );

  useEffect(() => {
    dispatch(changeMovie([]));
    movieDetails.then((res) => {

      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movie">
      <h2 className="moviesTitle">New Releases</h2>

      <div className="movie">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default NewReleases;