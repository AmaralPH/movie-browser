import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { imagesForGalery } from '../services/GenericMovieAPI';

import '../styles/galery.css';

function MovieGalery() {
  const id = useHistory().location.pathname.split('/')[2];
  const [galery, setGalery] = useState(undefined);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const getGalery = () => {
      imagesForGalery('/movie', id, '/images')
        .then((data) => setGalery(data))
    }

    getGalery();
  }, []);

  if (galery !== undefined) {
    return (
      <>
        <Card body onClick={handleShow}>Ver galeria</Card>
        {console.log(galery)}
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header>
            <Modal.Title>Galeria de fotos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {galery.backdrops.map((imageLink) => (
                <Carousel.Item>
                  <img
                    className="galery-img"
                    src={`https://image.tmdb.org/t/p/original/${imageLink.file_path}`}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  else {
    return <div>loading..</div>
  }
}

export default MovieGalery;
