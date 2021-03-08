import React from 'react';

const Header = (props) => {
    const{count,setCount} = props;
    return (
        <div>
            <h2>Hello header Value: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Header;