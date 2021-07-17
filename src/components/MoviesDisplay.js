import React from 'react';
import Carrossel from './Carrossel.js';
import Container from 'react-bootstrap/Container';
import MovieCardsContainer from './MovieCardsContainer.js';
import MoviePagesBar from './MoviePagesBar.js';

function MoviesDisplay() {
  return (
    <>
    <Container>
      <Carrossel />
      <MovieCardsContainer />
      <MoviePagesBar />
    </Container>
    </>
  )
}

export default MoviesDisplay;
