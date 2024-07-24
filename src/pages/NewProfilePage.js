import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../images/Logo.png'

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import { AppContext } from '../AppProvider';


function NewProfilePage() {

    const navigate = useNavigate()


    const {
        isUserLogged,
        registerPageNumber,
        userFirstNameInput,
        userGenderSelect,
        userLastNameInput,
        userData,
        userEmail,
        userPlaceSelect,
        setIsUserLogged,
        setRegisterPageNumber,
        setUserData,
        setUserEmail,
        setUserPlaceSelect,
        setUserFirstNameInput,
        setUserLastNameInput,
        setUserGenderSelect,
    } = useContext(AppContext)

    const [displayedActivities, setDisplayedActivities] = useState([...userData.userActivities]);

    let handleUserPlaceSelect = e => setUserPlaceSelect(e.target.value)
    let handleUserEmail = e => setUserEmail(e.target.value)
    let handleUserFirstNameInput = e => setUserFirstNameInput(e.target.value)
    let handleUserLastNameInput = e => setUserLastNameInput(e.target.value)
    let hendleUserGenderSelect = e => setUserGenderSelect(e.target.value)
    let handleChangingPage = () => registerPageNumber === 1 ? setRegisterPageNumber(2) : setRegisterPageNumber(1)

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

    const activitiesInputs = () => displayedActivities.map(activity => {
        return (
            <ActivitiesInput
                key={activity.text}
                text={activity.text}
                activity={activity.type}
                checked={activity.checked}
                click={() => onActivityClick(activity)}
            />)
    })

    const filterByCategoryActivity = category => {

        let newActiviti = displayedActivities.filter(activity => activity.category === category)

        const filteredDisplayedActivities = newActiviti.map(activity => {
            return (
                <ActivitiesInput
                    key={activity.text}
                    text={activity.text}
                    activity={activity.type}
                    checked={activity.checked}
                    click={() => onActivityClick(activity)}
                />)
        })
        return filteredDisplayedActivities
    }

    const handleSubmit = (e) => {
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
    const FormButton = ({ text }) => {
        return (
            <button type='button' className='formButton profilePageButton' onClick={() => handleChangingPage()}>
                {text}
            </button>
        )
    }

    console.log(userGenderSelect);

    const ActivitiesSelect = ({ category }) => {
        const text = () => {
            if (category === 'Team Sports') {
                return 'Sporty druzynowe'
            }
            if (category === 'Individual Sports') {
                return 'Sporty indywidualne'
            }
            if (category === 'Outdoor Sports') {
                return 'Sporty outdoorowe'
            }
            if (category === 'Mind Games') {
                return 'Główkowanie'
            }
            if (category === 'Other') {
                return 'Inne'
            }

        }

        return (
            <div>
                <label className='ProfilePage-formLabel' htmlFor="">
                    {text()}
                    {filterByCategoryActivity(category)}
                </label>
            </div>
        )
    }




    return (
        <div className='ProfilePage'>

            <h2 className='ProfilePage-header'>
                <img src={logo} alt="" className='ProfilePage-logo' />
                Not a Single Time
            </h2>
            <p className='ProfilePage-text'>Załóż konto, poznaj ludzi, z którymi możesz dzielić swoje pasje
                <br />i spędzać czas wspólnie.</p>
            <p className='ProfilePage-text'>Jeśli masz konto, <a href="">zaloguj się tutaj.</a></p>
            <p className='ProfilePage-text'><span>
                {registerPageNumber === 1 ? "1/2 kroków" : "2/2 kroków"}
            </span></p>
            <form className='ProfilePage-form' action="" onSubmit={handleSubmit}>
                {registerPageNumber === 1 ?
                    <div>
                        {/* <label className='ProfilePage-formLabel' htmlFor="gender">
                            Płeć
                            <select name="" id="gender" value={userGenderSelect} onChange={hendleUserGenderSelect}>
                                <option value="" disabled>Wybierz płeć</option>
                                <option value="Kobieta">Kobieta</option>
                                <option value="Mężczyzna">Mężcyzna</option>
                            </select>
                        </label> */}
                        <div className='ProfilePage-genderLabel'>


                            <div className='genderDiv'>Płeć:</div>
                            <label className='genderLabel' htmlFor="">
                                <input className='genderRadio' name='gender' type="radio" value={'Kobieta'} onClick={hendleUserGenderSelect}
                                    checked={userGenderSelect === 'Kobieta'} />
                                Kobieta
                            </label>
                            <label className='genderLabel' htmlFor="">
                                <input className='genderRadio' name='gender' type="radio" value={'Męzczyzna'} onClick={hendleUserGenderSelect}
                                    checked={userGenderSelect === 'Męzczyzna'}
                                />
                                Męzczyzna
                            </label>

                        </div>

                        <div className='ProfilePage-NameDiv'>

                            <label className='ProfilePage-formLabel namesLabel' htmlFor="firstName">
                                Imię:
                                <input className='genderInput firstGenderInput' type="text" value={userFirstNameInput} onChange={handleUserFirstNameInput} />
                            </label>
                            <label className='ProfilePage-formLabel namesLabel' htmlFor="lastName" >
                                Nazwisko:
                                <input className='genderInput' type="text" value={userLastNameInput} onChange={handleUserLastNameInput} />
                            </label>
                        </div>

                        <label htmlFor="" className='ProfilePage-formLabel'>
                            E-mail
                            <input type="text" value={userEmail} onChange={handleUserEmail} />
                        </label>


                        <label className='ProfilePage-formLabel ProfilPage-CitySelect' htmlFor="">

                            Miasto:
                            <PlaceSelect placeSelect={userPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
                        </label>
                    </div>

                    :
                    <div className='activitiesSelectsDiv'>
                        <ActivitiesSelect category={'Team Sports'} />
                        <ActivitiesSelect category={'Individual Sports'} />
                        <ActivitiesSelect category={'Outdoor Sports'} />
                        <ActivitiesSelect category={'Mind Games'} />
                        <ActivitiesSelect category={'Other'} />

                    </div>
                }
                <div className='profilePageButtonDiv'>

                    <button className='profilePageButton' onSubmit={handleSubmit}>
                        Wyślij
                    </button>

                    {registerPageNumber === 1 ?
                        <FormButton text={'Dalej'} /> :
                        <FormButton text={'Wstecz'} />
                    }
                </div>
            </form>

        </div >
    );
}

export default NewProfilePage;