import React from 'react';
import Carrossel from './Carrossel.js';
import Container from 'react-bootstrap/Container';
import MovieCardsContainer from './MovieCardsContainer.js';
import MoviePagesBar from './MoviePagesBar.js';

function MoviesDisplay() {
  return (
    <>
    <Carrossel />
    <Container>
      <MovieCardsContainer />
    </Container>
    <MoviePagesBar />
    </>
  )
}

export default MoviesDisplay;
