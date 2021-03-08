import React from 'react';
import Grand from './Grand/Grand';

const Children = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>Hello Children</h4>
        <Grand count={count}/>
        </div>
    );
};

export default Children;