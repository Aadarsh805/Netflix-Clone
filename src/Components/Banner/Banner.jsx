import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);
  return (
    <div className="banner">
      <img
        src={`${baseUrl}${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`}
        alt={movie.name}
        className="banner__image"
      />

      <div className="banner__info">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__extraInfo">
          <p>{movie.first_air_date && `${movie.first_air_date ? movie.first_air_date.slice(0, 4): movie.release_date.splice(0,4)}`}</p>
          <span>|</span>
          <p>{movie.vote_average}</p>
        </div>
        <p className="description">{movie?.overview}</p>

        <button className="playBtn">play</button>
      </div>
    </div>
  );
};

export default Banner;
