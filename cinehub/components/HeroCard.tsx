import { baseImgUrl } from "@libs/constants";
import { Movie } from "@libs/types";
import { InfoOutlined, PlayCircleOutlineOutlined } from "@mui/icons-material";
import React from "react";

const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <img
          src={`${baseImgUrl}${
            trendingMovie?.backdrop_path || trendingMovie?.poster_path
          }`}
          alt="trendingmovie"
          className="hero-bg-image"
        />
      </div>
      <div className="overlay" />
      <h1 className="hero-title">
        {trendingMovie?.title || trendingMovie?.name}
      </h1>
      <p className="hero-overview">{trendingMovie?.overview}</p>
      <div className="hero-btns">
        <button className="hero-btn">
          <PlayCircleOutlineOutlined />
          Play Now
        </button>
        <button className="hero-btn">
          <InfoOutlined />
          More Info
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
