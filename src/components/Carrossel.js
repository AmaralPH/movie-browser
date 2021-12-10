import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { genericMovieAPI } from '../services/GenericMovieAPI';

import '../styles/carrossel.css'

function Carrossel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const getData = () => {
      genericMovieAPI('/movie/popular', '', '', 1).then((response) => setData(response.results));
    }
    getData();
  }, [setData])

  return (
    <Carousel
      activeIndex={ index }
      onSelect={ handleSelect }
      className="carrossel"
    >
      {data.slice(0, 3).map((movie, i) => (
        <Carousel.Item key={ i }>
          {/* {console.log(movie)} */}
          <img
            className="d-block w-100 img-carrossel"
            src={ `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}` }
            alt="Movie poster"
          />
          <Carousel.Caption className="carrossel-caption">
            <h3>{ movie.title ? movie.title : movie.name }</h3>
            <p maxlength="300">{ `${movie.overview.slice(0, 180)}...` }</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrossel;
