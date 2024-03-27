import { baseImgUrl } from "@libs/constants";
import { Movie } from "@libs/types";
import React from "react";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <img
        src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
        className="thumbnail"
        alt={movie?.title || movie?.name}
      />
      <div className="border"></div>
    </div>
  );
};

export default MovieCard;
