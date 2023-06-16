import React from 'react';
import Crystal from './Crystal';
import PropTypes from 'prop-types';

const CrystalList = ({ crystals }) => {
    const crystalComponents = crystals.map((crystal) => {
        return (
            <li key={crystal.id}>
            <Crystal
                id={crystal.id}
                name={crystal.name}
                color={crystal.color}
                powers={crystal.powers}
                charge={crystal.charge}
            />
            </li>
        )
    });
    
    return (
        <section>
            <h2>Crystal List</h2>
            <ul>
                {crystalComponents}
            </ul>
        </section>
    );
};

CrystalList.propTypes = {
    crystal: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            powers: PropTypes.string.isRequired,
            charge: PropTypes.number.isRequired
        })
    )
}

export default CrystalList;

