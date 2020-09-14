import React from "react";
import PropTypes from 'prop-types';

import './style.css'

const Header = (props) => (
    <div className='Header'>Current Counter: {props.count}</div>
);

Header.propTypes = {
    count: PropTypes.number
}

export default Header
