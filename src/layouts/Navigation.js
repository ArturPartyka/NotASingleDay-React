import React, { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../AppProvider';

function Navigation() {

    const { isUserLogged } = useContext(AppContext)


    const list = useMemo(() => {
        const profilePagePath = isUserLogged ? '/profile-page' : '/'
        return [
            // { name: 'start', path: '/', },
            { name: 'wyszukiwarka', path: '/search' },
            { name: 'znajomi', path: '/friends', },
            { name: 'wydarzenia', path: '/events', },
            { name: 'Twój profil', path: profilePagePath, },

        ]
    }, [isUserLogged])

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

//useMemo dla