import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import busca from '../imgs/busca-icon.png';

function SearchBar() {
  return (
    <InputGroup className="mb-1" size="sm">
      aaa
      <FormControl
        type="search"
        // className="mr-5"
        placeholder="Buscar por filme"
        aria-label="Buscar por filme"
      />
      <Button variant="secondary">
        <img
          alt="icone de busca"
          className="busca-icon"
          height="30"
          src={ busca }
          width="30"
        />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
