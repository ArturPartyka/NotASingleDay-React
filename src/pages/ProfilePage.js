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
        console.log(actievietes.filter(activity => activity.checked))

    }

    return (
        <div className='ProfilPage'>
            <h2>Stwórz swój profil</h2>
            <form action="" onSubmit={handleSubmit}>
                {actievietesInputs()}


                <button type='submit' >Zapisz</button>
            </form>

        </div>
    );
}

export default ProfilePage;