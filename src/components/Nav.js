import React from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return(
            <div>
                This is my nav bar
                <NavLink to='/'>Log Out </NavLink>
                <NavLink to='/login'>Log In </NavLink>
            </div>
        )
    }
}

export default Nav;