"use client";
import { baseImgUrl } from "@libs/constants";
import { Movie } from "@libs/types";
import React, { useState } from "react";
import Modal from "./Modal";

interface Props {
  movie: Movie;
}
const MovieCard = ({ movie }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="movie-card" onClick={openModal}>
        <img
          src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
          className="thumbnail"
          alt={movie?.title || movie?.name}
        />
        <div className="border"></div>
      </div>
      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;
