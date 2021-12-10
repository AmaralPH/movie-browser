import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Header from '../components/Header';
import MovieGalery from '../components/MovieGalery';

import { genericMovieAPI } from '../services/GenericMovieAPI';

import '../styles/movie-details.css';

function MovieDetails() {
  const id = useHistory().location.pathname.split('/')[2];
  const [data, setData] = useState(undefined);
  const [stream, setStream] = useState(undefined);
  const [credits, setCredits] = useState(undefined);

  useEffect(() => {
    const getMovie = () => {
      genericMovieAPI('/movie', id).then((data) => setData(data));
    }

    getMovie(id);
  }, [setData, id])

  useEffect(() => {
    const getStreams = () => {
      genericMovieAPI('/movie', id, '/watch/providers')
        .then((data) => setStream(data.results.BR));
    }

    getStreams();
  }, [setStream, id]);

  useEffect(() => {
    const getCredits = () => {
      genericMovieAPI('/movie', id, '/credits')
        .then((data) => setCredits(data));
    }

    getCredits();
  }, [setCredits, id])
  if (data !== undefined && credits !== undefined) {
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
        <Container className="movie">
          <section className="movie__img">
            <img alt="Poster" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} />
          </section>
          <Container className="movie__container">

            <section className="movie__info">
              <h1 className="movie__title"><b>{ data.title }</b></h1>
              <h5><b>PLOT</b></h5>
              <h6 className="movie__detail">{ data.overview }</h6>
              <h5><b>GENRES</b></h5>
              <h6 className="movie__genres movie__detail">
                {data.genres !== undefined ? data.genres.map((genre) => (
                  <Button size="sm" variant="warning" className="movie__genre">
                    <span>{genre.name}</span>
                  </Button>
                )) : null }
              </h6>
              <h5><b>DIRECTED BY</b></h5>
              <h6 className="movie__detail">{credits.crew.find((person) => person.job === 'Director').name}</h6>
              <h5><b>WATCH ON</b></h5>
              <h6 className="movie__detail">{stream === undefined ? 'Apenas nos cinemas' 
                : stream.flatrate_and_buy !== undefined ? stream.flatrate_and_buy.map((info) => (
                <a href={stream.link} target="_blank">
                  <img src={`https://image.tmdb.org/t/p/original${info.logo_path}`} width="50" />
                </a>
              )) : stream.flatrate.map((info) => (
                <a href={stream.link} target="_blank">
                  <img src={`https://image.tmdb.org/t/p/original${info.logo_path}`} width="50" />
                </a>
              ))}</h6>
            </section>
          </Container>
        </Container>
        <Container>
          <MovieGalery />
        </Container>
        </div>
      </div>
    );
  }
  return <div>
    Loading...
    </div>
}

export default MovieDetails;
