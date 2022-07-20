import "./App.css";
import instance from "./axios";
import Row from "./Components/Row/Row";
import requests from "./requests";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./Components/Info/Info";
import Landing from './Components/Landing/Landing'

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing/>}/>
          <Route path="/movie" element={<>
                <Nav />
                <Banner />

                <Row
                  title="netflix originals"
                  fetchUrl={requests.fetchOriginals}
                  largePoster={true}
                />
                <Row title="trending now" fetchUrl={requests.fetchTrending} />
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
              </>} />
              <Route path='movie/:id' element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
