import React from 'react';
import { connect } from 'react-redux';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { changePage } from '../actions';

import '../styles/page-bar.css';

function MoviePagesBar(props) {
  const { page, setPage } = props;

  const createButtons = (n) => {
    const buttons = [];
    for (let i = n; i < n + 10; i += 1) {
      buttons.push(
        <button
          className={ i === n ? 'page-btn checked' : 'page-btn'}
          onClick={ () => {
            setPage(i);
            window.location.href="#most-popular";
          } }
        >
          {i}
        </button>
      )
    }
    return buttons;
  }

  return (
    <ButtonToolbar className="page-bar">
      <ButtonGroup className="me-2">
      <button
          className="page-btn"
          onClick={ () => {
            setPage(page - 1);
            window.location.href="#most-popular";
          }}
        >
          {'<'}
        </button>
      </ButtonGroup>
      <ButtonGroup className="me-2 list-btn">
          {createButtons(page)}
      </ButtonGroup>
        <button
          className="page-btn"
          onClick={ () => {
            setPage(page + 1);
            window.location.href="#most-popular";
          }}
        >
          {'>'}
        </button>
    </ButtonToolbar>
  );
}

const mapStateToProps = (state) => ({
  page: state.initialPage.page,
})

const mapDispatchToProps = (dispatch) => ({
  setPage: (payload) => dispatch(changePage(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePagesBar);
