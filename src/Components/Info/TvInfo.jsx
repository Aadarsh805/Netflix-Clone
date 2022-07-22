import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Info.css";
import { API_KEY } from "../../requests";
import Nav from "../Nav/Nav";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const TvInfo = () => {
  const [tv, setTv] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getTvData();
    window.scrollTo(0, 0);
  }, []);

  const getTvData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setTv(data));
  };

  return (
    <div className="info">
      <Nav className="nav" />

      <main className="main">
        <img
          src={`${baseUrl}${
            tv.backdrop_path ? tv.backdrop_path : tv.poster_path
          }`}
          alt={tv.name || tv.title}
          className="bg"
        />
        <div className="gradient"></div>
        <div className="movie__details">
          {tv.original_title && (
            <h1 className="original__title">{tv.original_title}</h1>
          )}
          <h1 className="title">{tv.title || tv.name || tv.original_name}</h1>
          <div className="extraInfo">
            <p>
              {tv.last_air_date &&
                `${
                  tv.last_air_date
                    ? tv.last_air_date.slice(0, 4)
                    : tv.last_air_date.splice(0, 4)
                }`}
            </p>
            <span>|</span>
            <p>{tv.number_of_seasons} seasons</p>
            <span>|</span>
            <p>{tv.number_of_episodes} episodes</p>
          </div>
          <p className="tagline">{tv.overview}</p>
        </div>
      </main>
    </div>
  );
};
export default TvInfo;
