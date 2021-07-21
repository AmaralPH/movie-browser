import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

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
        <Row>
          <Col>
            <LogoBrand />
          </Col>
          <Col>
            <SearchBar />
          </Col>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <Col>
            <BookmarkBtn />
          </Col>
          aaaa
          <Col>
            <LoginBtn />
          </Col>
        </Row>
      </Navbar>
    </>
  )
}

export default Header;
