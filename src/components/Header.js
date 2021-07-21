import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBar from './SearchBar';
import LogoBrand from './LogoBrand';
import BookmarkBtn from './BookmarkBtn';
import LoginBtn from './LoginBtn';

import '../styles/Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Row className="header-row">
          <Col sm="2" className="logo-brand">
            <LogoBrand />
          </Col>
          <Col sm="4">
            <SearchBar />
          </Col>
          <Col sm="4" className="bookmark-btn">
            <BookmarkBtn />
          </Col>
          <Col sm="1">
            <LoginBtn />
          </Col>
        </Row>
      </Navbar>
    </>
  )
}

export default Header;
