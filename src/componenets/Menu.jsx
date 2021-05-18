import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ()=> {
    return(
        <>
            <NavLink exact to="/">About</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
        </>
    );
}

export default Menu;