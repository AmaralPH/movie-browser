import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../imgs/netflix.png';

function LogoBrand() {
  return (
    <Navbar.Brand href="/">
      <section className="logo">
        <img 
          alt="claquete de cinema"
          src={ logo }
          width="100"
          heigth="100"
          className="d-inline-block align-top logo-img"
        />{' '}
      </section>
    </Navbar.Brand>
  );
}

export default LogoBrand;
