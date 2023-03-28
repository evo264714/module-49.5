import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    return (
        <div>
            <h1>Buy this: {name}</h1>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;