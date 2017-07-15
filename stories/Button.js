import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const Button = ({ children, submit }) => (
  <button
    style={buttonStyles}
    onClick={submit}
    onKeyDown={submit}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string,
  submit: React.PropTypes.func,
};

export default Button;
