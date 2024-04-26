import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchPage() {
    return (
        <>

            <NavLink to='/shareUserData'>
                <h4>Daj się wyszukać</h4>
            </NavLink>
            <NavLink to='/findUsers'>
                <h4>Szukaj osób</h4>
            </NavLink>
        </>
    );
}

export default SearchPage;