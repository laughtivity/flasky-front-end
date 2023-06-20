import React from 'react';
import PropTypes from 'prop-types';


const Crystal = ({ id, name, color, powers, charges, increaseCharge, removeCrystal }) => {
    // ---- no longer needed because charges are being passed in 
    // as a prop

    // const [newCharge, setCharge] = useState(charges)
    
    // const increaseCharge = () => {
    //     setCharge(newCharge + 1)
    //     console.log(newCharge)
    // }
    return (
        <>
            <h2>{name}</h2>
            <p>{color}</p>
            <p>{powers}</p>
            {/* need to pass a function so it does not become undefined */}
            {/* need anonymous function to pass the event along with calling the function */}
            <button onClick = {() => increaseCharge(id)}>Charge Crystal</button>
            <p>You've charged {name} crystal {charges} times!</p>
            <button onClick = {() => removeCrystal(id)}>Remove Crystal</button>

        </>
    );
};

Crystal.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charges: PropTypes.number.isRequired,
    increaseCharge: PropTypes.func.isRequired,
    removeCrystal: PropTypes.func.isRequired
}

export default Crystal;