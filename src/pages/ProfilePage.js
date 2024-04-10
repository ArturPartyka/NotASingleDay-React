import React, { useState } from 'react';

import ActievietesInput from './ActievietesInput';


function ProfilePage() {

    let actievietesInputs = () => actievietes.map(activity => {
        return (
            <ActievietesInput
                key={activity.text}
                text={activity.text}
                activity={activity.activity}
                checked={activity.checked}
                click={activity.click} />)
    })


    const [footballInputValue, setFootballInputValue] = useState(false)
    let handleFootballInputChange = () => setFootballInputValue(!footballInputValue)
    const [basketballInputValue, setBasketballInputValue] = useState(false)
    let handleBasketballInputChange = () => setBasketballInputValue(!basketballInputValue)
    const [bikeInputValue, setBikeInputValue] = useState(false)
    let handleBikeInputChange = () => setBikeInputValue(!bikeInputValue)
    const [ducksInputValue, setDucksInputValue] = useState(false)
    let handleDucksInputChange = () => setDucksInputValue(!ducksInputValue)
    const [walkInputValue, setWalkInputValue] = useState(false)
    let handleWalkInputChange = () => setWalkInputValue(!walkInputValue)
    const [chessInputValue, setChessInputValue] = useState(false)
    let handleChessInputChange = () => setChessInputValue(!chessInputValue)

    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    const [userLastNameInput, setUserLastNameInput] = useState('')
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)

    const [userData, setUserData] = useState({
        fistName: '',
        lastName: '',
        place: '',
        userActievietes: {},
    })

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

    let handleSubmit = (e) => {
        e.preventDefault()
        let userActivietes = actievietes.filter(activity => activity.checked)
        console.log(userActivietes)
        console.log(actievietes);
        setUserData({
            fistName: userFirstNameInput,
            lastName: userLastNameInput,
            place: userPlaceSelect,
            userActievietes: userActivietes,
        })
        console.log(userData);
    }

    return (
        <div className='ProfilPage'>
            <h2>Stwórz swój profil</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    Imię:
                    <input type="text" id='firstName' value={userFirstNameInput} onChange={handleUserFirstNameInput} />
                </label>
                <label htmlFor="lastName" >
                    Nazwisko:
                    <input type="text" value={userLastNameInput} onChange={handleUserLastNameInput} />
                    <br />
                </label>
                <label htmlFor="">
                    Twoje aktywności:
                    {actievietesInputs()}
                </label>
                <br />
                <label htmlFor="place">
                    Miejscowość
                    <select name="" id="place" value={userPlaceSelect} onChange={handleUserPlaceSelect}>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Łódź">Łódź</option>
                        <option value="Rzeszów">Rzeszów</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </label>

                <button type='submit' >Zapisz</button>
            </form>

        </div>
    );
}

export default ProfilePage;