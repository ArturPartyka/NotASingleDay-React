import React, { createContext, useState } from 'react';

export const AppContext = createContext("");

const AppProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(false)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        place: '',
        userActievietes: null,
    })

    const [footballInputValue, setFootballInputValue] = useState(false)
    const [basketballInputValue, setBasketballInputValue] = useState(false)
    const [bikeInputValue, setBikeInputValue] = useState(false)
    const [ducksInputValue, setDucksInputValue] = useState(false)
    const [walkInputValue, setWalkInputValue] = useState(false)
    const [chessInputValue, setChessInputValue] = useState(false)

    let handleFootballInputChange = () => setFootballInputValue(!footballInputValue)
    let handleBasketballInputChange = () => setBasketballInputValue(!basketballInputValue)
    let handleBikeInputChange = () => setBikeInputValue(!bikeInputValue)
    let handleDucksInputChange = () => setDucksInputValue(!ducksInputValue)
    let handleWalkInputChange = () => setWalkInputValue(!walkInputValue)
    let handleChessInputChange = () => setChessInputValue(!chessInputValue)

    let actievietes = [{
        text: 'Piłka nozna',
        activity: 'football',
        checked: footballInputValue,
        click: handleFootballInputChange
    },
    {
        text: 'Piłka koszykowa',
        activity: 'basketball',
        checked: basketballInputValue,
        click: handleBasketballInputChange
    },
    {
        text: 'Szachy',
        activity: 'chess',
        checked: chessInputValue,
        click: handleChessInputChange
    },
    {
        text: 'Spacer',
        activity: 'walk',
        checked: walkInputValue,
        click: handleWalkInputChange
    },
    {
        text: 'Karmienie kaczek',
        activity: 'ducks',
        checked: ducksInputValue,
        click: handleDucksInputChange
    },
    {
        text: 'Jazda na rowerze',
        activity: 'bike',
        checked: bikeInputValue,
        click: handleBikeInputChange
    }
    ]

    return (
        <AppContext.Provider value={{ userData, setUserData, actievietes, isUserLogged, setIsUserLogged }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider