import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const { setUserData, setIsUserLogged } = useContext(AppContext)


    const [userPlaceSelect, setUserPlaceSelect] = useState('')
    const [userFirstNameInput, setUserFirstNameInput] = useState('')
    const [userLastNameInput, setUserLastNameInput] = useState('')


    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)

    const { actievietes } = useContext(AppContext)
    const navigate = useNavigate()

    let handleSubmit = (e) => {
        console.log('a');
        e.preventDefault()
        let userActivietes = actievietes.filter(activity => activity.checked)
        if (!userFirstNameInput) return alert('Wpisz swoje imię')
        if (!userLastNameInput) return alert('Wpisz swoje nazwisko')
        if (!userPlaceSelect) return alert('Wybierz swoje miasto')
        if (userActivietes.length === 0) return alert('Wybierz swoje aktywności')
        setUserData({
            firstName: userFirstNameInput,
            lastName: userLastNameInput,
            place: userPlaceSelect,
            userActievietes: userActivietes,
        })
        setIsUserLogged(true)
        navigate('/ProfilePage')

    }

    // function ButtonLink({ to, children }) {
    //     return <NavLink to={to}><button type='submit'>{children}</button></NavLink>
    // }

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
                        <option value="" disabled>Wybierz miasto</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Łódź">Łódź</option>
                        <option value="Rzeszów">Rzeszów</option>
                        <option value="Katowice">Katowice</option>
                    </select>
                </label>
                <button onSubmit={handleSubmit}>
                    Wyślij
                </button>
            </form>

        </div >
    );
}

export default NewProfilePage;