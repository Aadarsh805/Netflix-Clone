import "./Info.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../requests";
import Nav from "../Nav/Nav";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Info = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="info">
      <Nav className="nav" />

      <main className="main">
        <img
          src={`${baseUrl}${
            movie.backdrop_path ? movie.backdrop_path : movie.poster_path
          }`}
          alt={movie.name || movie.title}
          className="bg"
        />
        <div className="gradient"></div>
        <div className="movie__details">
          {movie.original_title && (
            <h1 className="original__title">{movie.original_title}</h1>
          )}
          <h1 className="title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="extraInfo">
            <p>
              {movie.release_date &&
                `${
                  movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : movie.first_air_date.splice(0, 4)
                }`}
            </p>
            <span>|</span>
            <p>{movie.vote_average}</p>
          </div>
          <p className="tagline">{movie.tagline}</p>
        </div>
      </main>
    </div>
  );
};

export default Info;
