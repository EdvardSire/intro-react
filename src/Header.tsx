import React from 'react'

const Header = (props: any) => {
    return(
        <div>
            <h1 className='text-3xl'>{props.name}</h1>
        </div>
    );
};

export default Header;