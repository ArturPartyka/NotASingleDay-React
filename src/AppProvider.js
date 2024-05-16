import React, { createContext, useState } from 'react';

export const AppContext = createContext("");

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

const AppProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(false)
    const [refreshNewProfilePage, setRefreshNewProfilePage] = useState(true)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        place: '',
        gender: '',
        userActivities: activities.map(activity => ({
            ...activity,
            checked: false,
        }))
    })
    const [sharedUserData, setSharedUserData] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        place: userData.place,
        gender: userData.gender,
        activities: [],
        begginingTime: '',
        endingTime: '',
    })

    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')
    const [userGenderSelect, setUserGenderSelect] = useState('')
    // const [newProfileActivities, setNewProfileActivities] = useState([])




    return (
        <AppContext.Provider value={{
            sharedUserData,
            setSharedUserData,
            refreshNewProfilePage,
            setRefreshNewProfilePage,
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