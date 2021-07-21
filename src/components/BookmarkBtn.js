import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import bookmark from '../imgs/bookmark-icon.png';

function BookmarkBtn() {
  return (
    <ButtonGroup >
      <Button variant="danger" className="butn-header">
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
  );
}

export default BookmarkBtn;
