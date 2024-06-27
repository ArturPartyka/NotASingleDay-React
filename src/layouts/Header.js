import React from 'react';

import Navigation from './Navigation';
import '../styles/Header.css'
import logo from '../images/Logo.png'

function Header() {
    return (
        <>
            <div className='header'>

                <img src={logo} alt="" className='logoImg' />

                <Navigation />
            </div>
        </>
    );
}

export default Header;