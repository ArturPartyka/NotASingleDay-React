import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import { AppContext } from '../AppProvider';


function NewProfilePage() {

    const navigate = useNavigate()

    const {
        refreshNewProfilePage,
        newProfileActivities,
        setNewProfileActivities,
        activities,
        isUserLogged,
        userFirstNameInput,
        userGenderSelect,
        userLastNameInput,
        userPlaceSelect,
        setIsUserLogged,
        setUserData,
        setUserPlaceSelect,
        setUserFirstNameInput,
        setUserLastNameInput,
        setUserGenderSelect,
    } = useContext(AppContext)

    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)
    let hendleUserGenderSelect = e => setUserGenderSelect(e.target.value)

    // const [newProfileActivities, setNewProfileActivities] = useState([])


    useEffect(() => {
        if (refreshNewProfilePage) {

            let allActivities = activities.map((activity) => ({
                ...activity,
                checked: false,
                click: () => {
                    let arrActivities = [...allActivities]
                    const activityIndex = arrActivities.findIndex(act => act.type == activity.type)
                    arrActivities[activityIndex].checked = !arrActivities[activityIndex].checked
                    allActivities = arrActivities
                    setNewProfileActivities(allActivities)
                }
            }))
            setNewProfileActivities(allActivities)
        }
    }, [])

    let activitiesInputs = () => newProfileActivities.map(activity => {

        return (
            <ActivitiesInput
                key={activity.text}
                text={activity.text}
                activity={activity.type}
                checked={activity.checked}
                click={activity.click}
            />)
    })

    let handleSubmit = (e) => {
        e.preventDefault()
        let userActivities = newProfileActivities.map(activity => ({
            type: activity.type,
            text: activity.text,
            checked: activity.checked,
        }))
        if (!userFirstNameInput) return alert('Wpisz swoje imię')
        if (!userLastNameInput) return alert('Wpisz swoje nazwisko')
        if (!userPlaceSelect) return alert('Wybierz swoje miasto')
        if (newProfileActivities.length === 0) return alert('Wybierz swoje aktywności')
        setUserData({
            firstName: userFirstNameInput,
            lastName: userLastNameInput,
            place: userPlaceSelect,
            gender: userGenderSelect,
            userActivities: userActivities
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
                        <option value="Męzczyzna">Męzcyzna</option>
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