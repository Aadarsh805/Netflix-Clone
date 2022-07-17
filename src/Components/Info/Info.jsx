import "./Info.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../requests";

const Info = () => {
  const [currentMovie, setCurrentMovie] = useState([]);
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
      .then((data) => setCurrentMovie(data));
  };
  console.log(currentMovie);

  return (
    <div className="info">
      <h1>
        {currentMovie.title || currentMovie.name || currentMovie.original_name}
      </h1>
    </div>
  );
};

export default Info;
