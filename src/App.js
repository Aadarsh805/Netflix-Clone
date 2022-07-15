import "./App.css";
import instance from "./axios";
import Row from "./Components/Row/Row";
import requests from "./requests";
import Banner from './Components/Banner/Banner'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="netflix originals" fetchUrl={requests.fetchOriginals} largePoster={true} />
      <Row title="trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="romance movies" fetchUrl={requests.fetchRomanticMovies} />
    </div>
  );
}

export default App;
