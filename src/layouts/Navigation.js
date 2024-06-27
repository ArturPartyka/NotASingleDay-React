import React, { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContext } from '../AppProvider';

function Navigation() {

    const { isUserLogged } = useContext(AppContext)


    const list = useMemo(() => {
        const profilePagePath = isUserLogged ? '/profile-page' : '/'
        return [
            // { name: 'start', path: '/', },
            { name: 'Zróbmy coś razem', path: '/search' },
            { name: 'Ustawienia', path: '/friends', },
            { name: 'Wydarzenia', path: '/events', },


        ]
    }, [isUserLogged])

    const menu = list.map(item => (
        <li key={item.name} className='NavigationElem'>
            <NavLink to={item.path} className='NavLink'>{item.name}</NavLink>
        </li>
    ))

    return (
        <>
            <nav >
                <ul className='NavigationList'>
                    {menu}
                    <li className='NavigationElem LoginButton'>
                        <NavLink to={'/login-page'}>{isUserLogged ? 'Login' : 'Zarejestruj się'}</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;

//useMemo dla