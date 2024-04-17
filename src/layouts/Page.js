import React, { useContext } from 'react';
import { Route, Routes, } from 'react-router-dom';

import NewProfilePage from '../pages/NewProfilePage';
import ProfilePage from '../pages/ProfilePage';
import { AppContext } from '../AppProvider';

function Page() {

    // const { isUserLogged } = useContext(AppContext)

    return (
        <div className='Page'>
            <Routes>
                <Route path='/NewProfilePage' element={<NewProfilePage />} />
                <Route path='/ProfilePage' element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default Page;
