import React, { useContext, useState } from 'react';

import ActievietesInput from './ActievietesInput';

import { AppContext } from '../AppProvider';


function NewProfilePage() {


    let actievietesInputs = () => actievietes.map(activity => {
        return (
            <ActievietesInput
                key={activity.text}
                text={activity.text}
                activity={activity.activity}
                checked={activity.checked}
                click={activity.click} />)
    })

    const { userData, setUserData } = useContext(AppContext)


    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')


    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)

    const { actievietes } = useContext(AppContext)


    let handleSubmit = (e) => {
        e.preventDefault()
        let userActivietes = actievietes.filter(activity => activity.checked)
        setUserData({
            firstName: userFirstNameInput,
            lastName: userLastNameInput,
            place: userPlaceSelect,
            userActievietes: userActivietes,
        })
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

export default NewProfilePage;