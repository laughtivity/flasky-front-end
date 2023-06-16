import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Crystal = ({ name, color, powers, charge }) => {

    const [newCharge, setCharge] = useState(charge)
    
    const increaseCharge = () => {
        setCharge(newCharge + 1)
        console.log(newCharge)
    }
    return (
        <>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            <button onClick = {increaseCharge}>Change Crystals</button>
            <p>You've charged {name} crystal {newCharge} times!</p>
        </>
    );
};

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charge: PropTypes.number.isRequired
}

export default Crystal;