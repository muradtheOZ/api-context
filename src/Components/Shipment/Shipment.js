import React from 'react';
import Children from './Children/Children';

const Shipment = (props) => {
    const {count} = props;
    return (
        <div>
            <h3>Hello shipment:</h3>
            <Children count={count}></Children>
        </div>
    );
};

export default Shipment;