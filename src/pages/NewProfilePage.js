import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import { AppContext } from '../AppProvider';


function NewProfilePage() {

    const navigate = useNavigate()


    const {
        isUserLogged,
        userFirstNameInput,
        userGenderSelect,
        userLastNameInput,
        userData,
        userPlaceSelect,
        setIsUserLogged,
        setUserData,
        setUserPlaceSelect,
        setUserFirstNameInput,
        setUserLastNameInput,
        setUserGenderSelect,
    } = useContext(AppContext)

    const [displayedActivities, setDisplayedActivities] = useState([...userData.userActivities]);

    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)
    let hendleUserGenderSelect = e => setUserGenderSelect(e.target.value)

    let onActivityClick = (clickedActivity) => {
        let newDisplayedActivities = displayedActivities.map(
            (activity) => (activity.text === clickedActivity.text) ?
                {
                    ...activity,
                    checked: !activity.checked
                }
                : activity
        )
        setDisplayedActivities(newDisplayedActivities)

    }

    let activitiesInputs = () => displayedActivities.map(activity => {

        return (
            <ActivitiesInput
                key={activity.text}
                text={activity.text}
                activity={activity.type}
                checked={activity.checked}
                click={() => onActivityClick(activity)}
            />)
    })

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(displayedActivities);
        if (!userFirstNameInput) return alert('Wpisz swoje imię')
        if (!userLastNameInput) return alert('Wpisz swoje nazwisko')
        if (!userPlaceSelect) return alert('Wybierz swoje miasto')
        if (displayedActivities.filter(activity => activity.checked).length === 0) return alert('Wybierz swoje aktywności')
        setUserData({
            firstName: userFirstNameInput,
            lastName: userLastNameInput,
            place: userPlaceSelect,
            gender: userGenderSelect,
            userActivities: [...displayedActivities]
        })
        setIsUserLogged(true)
        navigate('/profile-page')
    }

    return (
        <div className='ProfilPage'>
            <h2>{isUserLogged ? 'Edytuj profil' : 'Stwórz swój profil'}</h2>
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
                Wybierz miejsce:
                <PlaceSelect placeSelect={userPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />

                <label htmlFor="gender">
                    Płeć
                    <select name="" id="gender" value={userGenderSelect} onChange={hendleUserGenderSelect}>
                        <option value="" disabled>Wybierz płeć</option>
                        <option value="Kobieta">Kobieta</option>
                        <option value="Mężczyzna">Mężcyzna</option>
                    </select>
                </label>
                <label htmlFor="">
                    Twoje aktywności:
                    {activitiesInputs()}
                </label>
                <br />
                <button onSubmit={handleSubmit}>
                    Wyślij
                </button>
            </form>

        </div >
    );
}

export default NewProfilePage;