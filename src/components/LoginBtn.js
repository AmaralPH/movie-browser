import React from 'react';
import Button from 'react-bootstrap/Button';

import login from '../imgs/login-icon.png';

function LoginBtn() {
  return (
    <Button variant="primary" className="butn-header">
      {/* <img
        alt="icone de login"
        className="login-icon"
        height="30"
        src={ login }
        width="30"
      /> */}
      Login
    </Button>
  );
}

export default LoginBtn;
