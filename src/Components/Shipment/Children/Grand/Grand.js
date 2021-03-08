import React from 'react';

const Grand = (props) => {
    const {count} = props;
    return (
        <div>
            <h6>Hello grand children value:{count} </h6>
        </div>
    );
};

export default Grand;