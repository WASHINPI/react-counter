import React from 'react';
import PropTypes from 'prop-types';

import './style.css'


const Button = (props) => (
    <button
        className='Button'
        onClick={ props.clicked } >{ props.title }</button>
);

Button.propTypes = {
    title: PropTypes.string,
    clicked: PropTypes.func,
}

export default Button;
