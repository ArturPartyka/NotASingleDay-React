import React, { useContext } from 'react';
import { Route, Routes, } from 'react-router-dom';
import { AppContext } from '../AppProvider';

import NewProfilePage from '../pages/NewProfilePage';
import ProfilePage from '../pages/ProfilePage';
import SearchPage from '../pages/SearchPage';
import FindUsers from '../pages/FindUsers';
import ShareUserData from '../pages/ShareUserData';

function Page() {

    // const API = 'https://randomuser.me/api/?results=20'

    // let handleDataFetch = () => {
    //     fetch(API)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response
    //             }
    //             throw Error(response.status)
    //         })
    //         .then(response => response.json())
    //         .then(data => { console.log(data); })
    // }
    // handleDataFetch()
    // // const { isUserLogged } = useContext(AppContext)

    return (
        <div className='Page'>
            <Routes>
                <Route path='/new-profile-page' element={<NewProfilePage />} />
                <Route path='/profile-page' element={<ProfilePage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/find-users' element={<FindUsers />} />
                <Route path='/share-user-data' element={<ShareUserData />} />
            </Routes>
        </div>
    );
}

export default Page;

//zmienić nazwewnictwo na małe z myślnikami
