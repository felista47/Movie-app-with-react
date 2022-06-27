import React from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';

function Movie(props) {
  const url = "https://image.tmdb.org/t/p/original/";
  return (
  <div className="movieContainer">
    <div className="movie">
      <img src={`${url}/${props.movie.backdrop_path}`} alt="" className="moviePic" />
      <div className="movieContent">
        <h4 className="movieTitle">{props.movie.title}</h4>
        <div className="movieAdds">
          <StarRatings
            className="movieRating"
            rating={props.movie.vote_average/2}
            starRatedColor="blue"
            starDimension='15px'
            numberOfStars={5}
            name="rating"
          />
          <p className="movieTime">
            {props.movie.vote_count}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Movie
