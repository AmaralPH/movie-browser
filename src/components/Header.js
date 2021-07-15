import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import logo from '../imgs/logo.png';
import bookmark from '../imgs/bookmark-icon.png';
import login from '../imgs/login-icon.png';
import '../styles/Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/">
            <section className="logo">
              <img 
                alt="claquete de cinema"
                src={ logo }
                width="30"
                heigth="30"
                className="d-inline-block align-top"
              />{' '}
              Movie Browser
            </section>
          </Navbar.Brand>
          <InputGroup className="mb-1" size="sm">
            <FormControl
              type="search"
              className="mr-5"
              placeholder="Search movie by tittle"
              aria-label="Search movie by tittle"
            />
          </InputGroup>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <ButtonGroup >
            <Button variant="danger" className="btn">
              <img
                alt="icone de bookmark"
                className="bookmark-icon"
                height="30"
                src={ bookmark }
                width="30"
              />
              Watchlist
            </Button>
          </ButtonGroup>
          aaaa
          <Button variant="primary" className="btn">
            <img
              alt="icone de login"
              className="login-icon"
              height="30"
              src={ login }
              width="30"
            />
            Login
          </Button>

        </Container>
      </Navbar>
    </>
  )
}

export default Header;
