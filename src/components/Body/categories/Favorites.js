import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMovie } from "../../../redux/Slices/movieSlice";
import Movie from "../Movies";

function Favorites() {

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=2384938f56f2d5e077d35a9f4274b76f`
  );

  useEffect(() => {
    dispatch(changeMovie([]));
    movieDetails.then((res) => {
      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movieContainer">

    <div className="movies">
      <h2 className="moviesTitle">Favorites</h2>

      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
    </div>
  );
}

export default Favorites;