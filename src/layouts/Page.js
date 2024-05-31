import React from 'react';
import { Route, Routes, } from 'react-router-dom';

import NewProfilePage from '../pages/NewProfilePage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import FindUsers from '../pages/FindUsers';
import ShareUserData from '../pages/ShareUserData';
import UserData from '../pages/UserData';

function Page() {



    return (
        <div className='Page'>
            <Routes>
                <Route path='/' element={<NewProfilePage />} />
                <Route path='/NotASingleTime-React' element={<NewProfilePage />} />
                <Route path='/profile-page' element={<ProfilePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/find-users' element={<FindUsers />} />
                <Route path='/share-user-data' element={<ShareUserData />} />
                <Route path='user-data' element={<UserData />} />
            </Routes>
        </div>
    );
}

export default Page;

//zmienić nazwewnictwo na małe z myślnikami
