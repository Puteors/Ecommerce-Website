import { fetchGenreMovies } from "@actions/movieData";
import CategoryList from "@components/CategoryList";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import { Genre } from "@libs/types";

const Home = async () => {
  const genres = await fetchGenreMovies();
  const ex = genres.slice(2, 4)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="all-movies">
        {ex.map((genre: Genre) => (
          <CategoryList
            key={Number(genre.id)}
            title={genre.name}
            movies={genre.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
