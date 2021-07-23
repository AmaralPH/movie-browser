import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../imgs/netflix.png';

function LogoBrand() {
  return (
    <Navbar.Brand href="/">
        <img 
          alt="claquete de cinema"
          src={ logo }
          width="150"
          // heigth="50"
          className="d-inline-block align-top logo-img"
        />{' '}
    </Navbar.Brand>
  );
}

export default LogoBrand;
