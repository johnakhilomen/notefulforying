import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header className="headSection">
                <NavLink to={'/'}>
                    <h1>Noteful</h1>
                </NavLink>
            </header>
          );
    }
}
 
export default Header;