import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({ name, color, powers }) => {
// or can const Crystal = ({props)} => {
//     const name = props.name
// })
    return (
        <li>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button>Change Crystals</button>
        </li>
    );
};

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
}

export default Crystal;