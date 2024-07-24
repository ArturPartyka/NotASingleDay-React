import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext("");
const activities = [
    // Team Sports
    {
        text: 'Piłka nożna',
        type: 'football',
        category: 'Team Sports'
    },
    {
        text: 'Koszykówka',
        type: 'basketball',
        category: 'Team Sports'
    },
    {
        text: 'Piłka siatkowa',
        type: 'volleyball',
        category: 'Team Sports'
    },
    {
        text: 'Piłka ręczna',
        type: 'handball',
        category: 'Team Sports'
    },
    {
        text: 'Baseball',
        type: 'baseball',
        category: 'Team Sports'
    },
    {
        text: 'Hokej',
        type: 'hockey',
        category: 'Team Sports'
    },

    // Individual Sports
    {
        text: 'Badminton',
        type: 'badminton',
        category: 'Individual Sports'
    },
    {
        text: 'Tenis',
        type: 'tennis',
        category: 'Individual Sports'
    },
    {
        text: 'Boks',
        type: 'boxing',
        category: 'Individual Sports'
    },
    {
        text: 'Lekkoatletyka',
        type: 'athletics',
        category: 'Individual Sports'
    },
    {
        text: 'Łyżwiarstwo',
        type: 'skating',
        category: 'Individual Sports'
    },
    {
        text: 'Golf',
        type: 'golf',
        category: 'Individual Sports'
    },
    {
        text: 'Sporty siłowe',
        type: 'strength sports',
        category: 'Individual Sports'
    },

    // Outdoor Sports
    {
        text: 'Bieganie',
        type: 'running',
        category: 'Outdoor Sports'
    },
    {
        text: 'Spacer',
        type: 'walking',
        category: 'Outdoor Sports'
    },
    {
        text: 'Kolarstwo',
        type: 'cycling',
        category: 'Outdoor Sports'
    },
    {
        text: 'Nordic Walking',
        type: 'nordic walking',
        category: 'Outdoor Sports'
    },
    {
        text: 'Jazda na rolkach',
        type: 'roller skating',
        category: 'Outdoor Sports'
    },
    {
        text: 'Jazda na hulajnodze',
        type: 'scooter riding',
        category: 'Outdoor Sports'
    },
    {
        text: 'Jazda na nartach',
        type: 'skiing',
        category: 'Outdoor Sports'
    },

    // Mind Games
    {
        text: 'Bilard',
        type: 'billiards',
        category: 'Mind Games'
    },
    {
        text: 'Gra w karty',
        type: 'cards',
        category: 'Mind Games'
    },
    {
        text: 'Szachy',
        type: 'chess',
        category: 'Mind Games'
    },
    {
        text: 'Gry planszowe',
        type: 'board games',
        category: 'Mind Games'
    },
    {
        text: 'Puzzle',
        type: 'puzzles',
        category: 'Mind Games'
    },

    // Other
    {
        text: 'Wyjazd w góry',
        type: 'mountain trip',
        category: 'Other'
    },
    {
        text: 'Escape room',
        type: 'escape room',
        category: 'Other'
    },
    {
        text: 'Koncerty',
        type: 'concerts',
        category: 'Other'
    },
    {
        text: 'Gry miejskie',
        type: 'urban games',
        category: 'Other'
    },
    {
        text: 'Trampoliny',
        type: 'trampolines',
        category: 'Other'
    }
];


// let activities = [
//     {
//     text: 'Piłka nozna',
//     type: 'football',
// },
// {
//     text: 'Piłka koszykowa',
//     type: 'basketball',
// },
// {
//     text: 'Szachy',
//     type: 'chess',
// },
// {
//     text: 'Spacer',
//     type: 'walk',
// },
// {
//     text: 'Jazda na rowerze',
//     type: 'bike',
// },
// ]

const AppProvider = ({ children }) => {

    const [registerPageNumber, setRegisterPageNumber] = useState(1)

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
    const [userEmail, setUserEmail] = useState('')
    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')
    const [userGenderSelect, setUserGenderSelect] = useState('')
    const [randomUserData, setRandomUserData] = useState(null)
    // const [newProfileActivities, setNewProfileActivities] = useState([])

    let pleaces = ['bełchatów', 'biała podlaska', 'białystok', 'bielsko-biała', 'bydgoszcz', 'bytom', 'będzin', 'chełm', 'chorzów', 'częstochowa', 'dąbrowa górnicza', 'elbląg', 'ełk', 'gdańsk', 'gdynia', 'gliwice', 'gniezno', 'gorzów wielkopolski', 'grudziądz', 'głogów', 'inowrocław', 'jastrzębie-zdrój', 'jaworzno', 'jelenia góra', 'kalisz', 'katowice', 'kielce', 'konin', 'koszalin', 'kraków', 'kędzierzyn-koźle', 'legionowo', 'legnica', 'leszno', 'lubin', 'lublin', 'łódź', 'łomża', 'nowy dwór mazowiecki', 'mielec', 'mysłowice', 'olsztyn', 'opole', 'ostrowiec świętoszyski', 'ostrołęka', 'ostrów wielkopolski', 'pabianice', 'piekary śląskie', 'piotrków trybunalski', 'piła', 'poznań', 'pruszków', 'przemyśl', 'płock', 'racibórz', 'radom', 'rybnik', 'rzeszów', 'siedlce', 'siemianowice', 'sosnowiec', 'stalowa wola', 'stargard szczeciński', 'suwałki', 'szczecin', 'słupsk', 'świdnica', 'tarnów', 'tczew', 'tomaszów mazowiecki', 'toruń', 'tychy', 'warszawa', 'wałbrzych', 'wrocław', 'włocławek', 'zabrze', 'zamość', 'zgierz', 'zielona góra', 'żory',]

    useEffect(() => {

        const API = 'https://randomuser.me/api/?results=20'

        let handleDataFetch = () => {
            fetch(API)
                .then(response => {
                    if (response.ok) {
                        return response
                    }
                    throw Error(response.status)
                })
                .then(response => response.json())
                .then(data => setRandomUserData(data))
        }
        handleDataFetch()
    }, [])
    // const { isUserLogged } = useContext(AppContext)

    return (
        <AppContext.Provider value={{
            activities,
            isUserLogged,
            pleaces,
            randomUserData,
            refreshNewProfilePage,
            registerPageNumber,
            sharedUserData,
            userEmail,
            userData,
            userPlaceSelect,
            userFirstNameInput,
            userLastNameInput,
            userGenderSelect,
            setIsUserLogged,
            setRefreshNewProfilePage,
            setRegisterPageNumber,
            setSharedUserData,
            setUserData,
            setUserEmail,
            setUserFirstNameInput,
            setUserGenderSelect,
            setUserPlaceSelect,
            setUserLastNameInput,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider