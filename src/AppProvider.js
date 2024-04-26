import React, { createContext, useState } from 'react';

export const AppContext = createContext("");

const AppProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(false)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        place: '',
        gender: '',
        userActivites: null,
        currentActivites: null,
    })

    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')
    const [userGenderSelect, setUserGenderSelect] = useState('')

    const [footballInputValue, setFootballInputValue] = useState(false)
    const [basketballInputValue, setBasketballInputValue] = useState(false)
    const [bikeInputValue, setBikeInputValue] = useState(false)
    const [ducksInputValue, setDucksInputValue] = useState(false)
    const [walkInputValue, setWalkInputValue] = useState(false)
    const [chessInputValue, setChessInputValue] = useState(false)

    const [currentFootballInputValue, setCurrentFootballInputValue] = useState(false)
    const [currentBasketballInputValue, setCurrentBasketballInputValue] = useState(false)
    const [currentChessInputValue, setCurrentChessInputValue] = useState(false)
    const [currentWalkInputValue, setCurrentWalkInputValue] = useState(false)
    const [currentDucksInputValue, setCurrentDucksInputValue] = useState(false)
    const [currentBikeInputValue, setCurrentBikeInputValue] = useState(false)




    let handleActivityInputChange = (activityInputValue, setActivityInputValue) => setActivityInputValue(!activityInputValue)

    let activities = [{
        text: 'Piłka nozna',
        type: 'football',
        checked: footballInputValue,
        currentChecked: currentFootballInputValue,
        setState: setFootballInputValue,
        click: () => handleActivityInputChange(footballInputValue, setFootballInputValue),
        currentClick: () => handleActivityInputChange(currentFootballInputValue, setCurrentFootballInputValue)
    },
    {
        text: 'Piłka koszykowa',
        activity: 'basketball',
        checked: basketballInputValue,
        currentChecked: currentBasketballInputValue,
        setState: setBasketballInputValue,
        click: () => handleActivityInputChange(basketballInputValue, setBasketballInputValue),
        currentClick: () => handleActivityInputChange(currentBasketballInputValue, setCurrentBasketballInputValue)
    },
    {
        text: 'Szachy',
        activity: 'chess',
        checked: chessInputValue,
        currentChecked: currentChessInputValue,
        setState: setChessInputValue,
        click: () => handleActivityInputChange(chessInputValue, setChessInputValue),
        currentClick: () => handleActivityInputChange(currentChessInputValue, setCurrentChessInputValue)
    },
    {
        text: 'Spacer',
        activity: 'walk',
        checked: walkInputValue,
        currentChecked: currentWalkInputValue,
        setState: setWalkInputValue,
        click: () => handleActivityInputChange(walkInputValue, setWalkInputValue),
        currentClick: () => handleActivityInputChange(currentWalkInputValue, setCurrentWalkInputValue)

    },
    {
        text: 'Karmienie kaczek',
        activity: 'ducks',
        checked: ducksInputValue,
        currentChecked: currentDucksInputValue,
        setState: setDucksInputValue,
        click: () => handleActivityInputChange(ducksInputValue, setDucksInputValue),
        currentClick: () => handleActivityInputChange(currentDucksInputValue, setCurrentDucksInputValue)

    },
    {
        text: 'Jazda na rowerze',
        activity: 'bike',
        checked: bikeInputValue,
        currentchecked: currentBikeInputValue,
        setState: setBikeInputValue,
        click: () => handleActivityInputChange(bikeInputValue, setBikeInputValue),
        currentClick: () => handleActivityInputChange(currentBikeInputValue, setCurrentBikeInputValue)
    }
    ]



    // activites.map(activiety => {
    //     return (
    //         [activiety.checked, activiety.setState] = useState(false)
    //     )
    // })





    return (
        <AppContext.Provider value={{
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