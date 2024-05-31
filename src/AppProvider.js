import React, { createContext, useState, useEffect } from 'react';

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
            sharedUserData,
            userData,
            userPlaceSelect,
            userFirstNameInput,
            userLastNameInput,
            userGenderSelect,
            setIsUserLogged,
            setRefreshNewProfilePage,
            setSharedUserData,
            setUserData,
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