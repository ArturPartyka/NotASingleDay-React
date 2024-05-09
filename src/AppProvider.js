import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext("");

const AppProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(false)
    const [refreshNewProfilePage, setRefreshNewProfilePage] = useState(true)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        place: '',
        gender: '',
        userActivites: null,
    })

    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')
    const [userGenderSelect, setUserGenderSelect] = useState('')
    const [newProfileActivities, setNewProfileActivities] = useState([])

    let activities = [{
        text: 'Piłka nozna',
        type: 'football',
    },
    {
        text: 'Piłka koszykowa',
        type: 'basketball',
    },
    {
        text: 'Szachy',
        type: 'chess',
    },
    {
        text: 'Spacer',
        type: 'walk',
    },
    {
        text: 'Jazda na rowerze',
        type: 'bike',
    },
    ]


    return (
        <AppContext.Provider value={{
            refreshNewProfilePage,
            setRefreshNewProfilePage,
            newProfileActivities,
            setNewProfileActivities,
            userData,
            setUserData,
            activities,
            isUserLogged,
            setIsUserLogged,
            userPlaceSelect,
            setUserPlaceSelect,
            userFirstNameInput,
            setUserFirstNameInput,
            userLastNameInput,
            setUserLastNameInput,
            userGenderSelect,
            setUserGenderSelect
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider