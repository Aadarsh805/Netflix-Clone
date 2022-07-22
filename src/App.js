import "./App.css";
import instance from "./axios";
import Row from "./Components/Row/Row";
import requests from "./requests";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./Components/Info/Info";
import TvInfo from "./Components/Info/TvInfo";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import TvRow from "./Components/Row/TvRow";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route
            path="/movie"
            element={
              <>
                <Nav />
                <Banner />

                <TvRow
                  title="netflix originals"
                  fetchUrl={requests.fetchOriginals}
                  largePoster={true}
                />
                <Row title="trending now" fetchUrl={requests.fetchTrending} />
                <TvRow title="Anime" fetchUrl={requests.fetchAnime} />
                <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="horror movies"
                  fetchUrl={requests.fetchHorrorMovies}
                />
                <Row
                  title="action movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="romance movies"
                  fetchUrl={requests.fetchRomanticMovies}
                />
              </>
            }
          />
          <Route path="movie/:id" element={<Info />} />
          <Route path="tv/:id" element={<TvInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
