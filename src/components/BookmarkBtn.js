import React from 'react';
import Button from 'react-bootstrap/Button';

import bookmark from '../imgs/bookmark-icon.png';

function BookmarkBtn() {
  return (
    <Button variant="danger" size="sm" className="butn-header">
      <img
        alt="icone de bookmark"
        className="bookmark-icon"
        height="20"
        src={ bookmark }
        width="20"
      />
      Watchlist
    </Button>
  );
}

export default BookmarkBtn;
