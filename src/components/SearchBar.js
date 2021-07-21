import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import busca from '../imgs/busca-icon.png';

function SearchBar() {
  return (
    <InputGroup className="mb-1 search-bar-container" size="sm">
      <FormControl
        type="search"
        placeholder="Buscar por filme"
        aria-label="Buscar por filme"
        className="search-bar"
      />
      <img
        alt="icone de busca"
        className="busca-icon"
        height="20"
        src={ busca }
        width="20"
      />
    </InputGroup>
  );
}

export default SearchBar;
