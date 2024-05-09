import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchPage() {
    return (
        <>

            <NavLink to='/share-user-data'>
                <h4>Daj się wyszukać</h4>
            </NavLink>
            <NavLink to='/find-users'>
                <h4>Szukaj osób</h4>
            </NavLink>
        </>
    );
}

export default SearchPage;