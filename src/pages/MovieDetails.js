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
      <div
        className="back-img"
        style={ {
          backgroundImage: 
            `linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), 
            url('https://image.tmdb.org/t/p/w1280/${data.backdrop_path}')` 
        } }
      >
      <Header />
      <Container className="movie-details">
        <section className="first-details">
          {console.log(data)}
          <img alt="Poster" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
          <Container>
            <h2 className="movie-title">{ data.title }</h2>
          </Container>
        </section>
      </Container>
      </div>
    </div>
  );
}

export default MovieDetails;
