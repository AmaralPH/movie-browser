import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from '../components/Header';

import { getMovieById } from '../services/MovieAPI';

import '../styles/movie-details.css';

function MovieDetails() {
  const id = useHistory().location.pathname.split('/')[2];
  const [data, setData] = useState({});

  useEffect(() => {
    const getMovie = () => {
      getMovieById(id).then((data) => setData(data));
    }

    getMovie(id);
  }, [setData, id])

  return (
    <div className="movie-details-bg">
      <Header />
      <Container className="movie-details">
        <div>
          <img alt="Poster" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
        </div>
      </Container>
    </div>
  );
}

export default MovieDetails;
