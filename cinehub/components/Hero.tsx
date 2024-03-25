import { fetchTrending } from "@actions/movieData";
import React from "react";

const Hero = async () => {
  const trending = await fetchTrending();
  const randomNumber = Math.floor(Math.random() * trending.lenght);
  const movie = trending[randomNumber];
  return <div>Hero</div>;
};

export default Hero;
