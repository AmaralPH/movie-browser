import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getTrendingData } from '../services/TrendingMoviesAPI';

import '../styles/cards-container.css';

function MovieCardsContainer(props) {
  const { page } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      getTrendingData(page).then((movieInfo) => setData(movieInfo));
    }

    getData();
  }, [data, page]);

  return (
    <CardGroup>
      <h2 className="popular-header" id="most-popular">
        Mais populares<span className="header-bar"></span>
      </h2>
      <Row xs={ 1 } md={ 5 } className="g-4">
        {data.map((movie, i) => (
          <Col>
            <Link to={`/movie/${movie.id}`}>
              <Card key={ i } className="animation card">
                <Card.Img
                  variant="top"
                  src={ `https://image.tmdb.org/t/p/w300${movie.poster_path}` }
                  className="card-img"
                />
                <Card.Body className="card-body">
                  <h6 className="title">{movie.title ? movie.title : movie.name}</h6>   
                  <span>Ação, comédia</span>             
                  <div className="rate">
                    <medium>{movie.vote_average}</medium>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}

const mapStateToProps = (state) => ({
  page: state.initialPage.page,
})

export default connect(mapStateToProps, null)(MovieCardsContainer);
