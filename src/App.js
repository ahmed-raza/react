import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "semantic-ui-css/semantic.min.css";

import { Container, Card, Button, Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  function fetchMovies() {
    setLoad(true);
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setMovies(transformedMovies);
        setLoad(false);
      });
  }

  return (
    <Container>
      <Button
        style={{ marginTop: "7px" }}
        className="primary"
        onClick={fetchMovies}
      >
        Fetch Movies
      </Button>
      <hr />
      <Card className="fluid">
        <Dimmer active={load}>
          <Loader />
        </Dimmer>
        <Card.Content>
          <Card.Header>Movies</Card.Header>
          <Card.Content>
            <MoviesList movies={movies} />
          </Card.Content>
        </Card.Content>
      </Card>
    </Container>
  );
}

export default App;
