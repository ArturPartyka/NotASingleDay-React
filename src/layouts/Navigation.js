import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../AppProvider';

function Navigation() {

    const { isUserLogged } = useContext(AppContext)

    const profilePagePath = isUserLogged ? '/ProfilePage' : '/NewProfilePage'

    const list = [
        { name: 'start', path: '/', },
        { name: 'wyszukiwarka', path: '/search' },
        { name: 'znajomi', path: '/friends', },
        { name: 'wydarzenia', path: '/events', },
        { name: 'Twój profil', path: profilePagePath, },
    ]

    const menu = list.map(item => (
        <li key={item.name} className='NavigationElem'>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))

    return (
        <>
            <nav>
                <ul className='NavigationList'>
                    {menu}
                </ul>
            </nav>
        </>
    );
}

export default Navigation;