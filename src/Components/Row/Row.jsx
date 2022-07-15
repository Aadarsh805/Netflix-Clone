import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";

const Row = ({ title, fetchUrl, largePoster }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseUrl}${largePoster ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${largePoster && "row__largePoster"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
