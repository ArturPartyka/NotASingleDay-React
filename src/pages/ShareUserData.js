import React, { useContext, useState } from 'react';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppProvider';


function ShareUserData() {
    const { userData, sharedUserData, setSharedUserData } = useContext(AppContext)
    const navigate = useNavigate()

    const [newPlaceSelect, setNewPlaceSelect] = useState('')
    const [selectPlaceToggle, setSelectPlaceToggle] = useState(false)
    const [selectActivitiesToggle, setSelectActivitiesToggle] = useState(true)
    const [newActivities, setNewActivities] = useState(userData.userActivities)

    const hours = parseInt(new Date().toISOString().slice(11, 13)) + 2
    const date = new Date().toISOString()
    const currentDate = date.slice(0, 11) + hours + date.slice(13, 16)
    const [begginingTime, setBegginingTime] = useState(currentDate)
    const [endingTime, setEndingTime] = useState(currentDate)

    let handleNewDate = e => setBegginingTime(e.target.value)
    let handleEndingTime = e => setEndingTime(e.target.value)

    let handleSelectPlaceToggleButton = () => setSelectPlaceToggle(!selectPlaceToggle)

    let handleUserPlaceSelect = e => {
        setNewPlaceSelect(e.target.value)
        setSelectPlaceToggle(!selectPlaceToggle)
    }

    let handleSelectActivitiesToggleButton = () => {
        setSelectActivitiesToggle(!selectActivitiesToggle)

        activeActivitiesItems = () => {
            const checkedActivities = newActivities.filter(activity => activity.checked)
            return (checkedActivities.map(activity => {
                return (
                    <li key={activity.text}>
                        {activity.text}
                    </li>)
            }))
        }
    }
    const onActivityClick = clickedActivity => {
        let newDisplayedActivities = newActivities.map(
            (activity) => (clickedActivity.text === activity.text) ?
                {
                    ...activity,
                    checked: !activity.checked
                } :
                activity
        )
        setNewActivities(newDisplayedActivities)
    }

    let activeActivitiesItems = () => {
        if (newActivities) {
            const checkedActivities = newActivities.filter(activity => activity.checked)
            return (checkedActivities.map(activity => {
                return (
                    <li key={activity.text}>
                        {activity.text}
                    </li>)
            }))
        }
    }

    let activitiesInputs = () => (
        newActivities.map(activity => {
            return (
                <ActivitiesInput
                    key={activity.type}
                    text={activity.text}
                    activity={activity.type}
                    checked={activity.checked}
                    click={() => onActivityClick(activity)} />)
        })
    )

    const handleSubmit = e => {
        const checkedActivities = newActivities.filter(activity => activity.checked)
        e.preventDefault()
        let newSharedUserData = {
            ...userData,
            place: newPlaceSelect ? newPlaceSelect : userData.place,
            activities: checkedActivities,
            begginingTime: begginingTime,
            endingTime: endingTime,
        }
        setSharedUserData(newSharedUserData)
        navigate('/user-data')
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <span>Wybierz miejsce:</span>
                    {selectPlaceToggle ?
                        <PlaceSelect placeSelect={newPlaceSelect === '' ? userData.place : newPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
                        : <label>
                            <input type="text" value={newPlaceSelect === '' ? userData.place : newPlaceSelect} readOnly />
                            <button type="button" onClick={handleSelectPlaceToggleButton}>Zmień</button>
                        </label>
                    }
                </div>
                {userData.userActivities ?
                    <div>
                        <span>Wybierz aktywności:</span>
                        {selectActivitiesToggle ?
                            <div>
                                {activeActivitiesItems()}
                            </div> :
                            <div>
                                {activitiesInputs()}
                            </div>
                        }
                        <button type='button' onClick={handleSelectActivitiesToggleButton}>Zmień</button>
                    </div> :
                    <div>Nie ma aktywności</div>
                }
                <div>
                    <label htmlFor="">
                        określ czas
                        <br />
                        od kiedy masz czas:
                        <input type="datetime-local" value={begginingTime} onChange={handleNewDate} min={currentDate} />
                        do kiedy masz czas:
                        <input type="datetime-local" value={endingTime} onChange={handleEndingTime} min={begginingTime} />
                    </label>
                </div>
                <button type='submit'>Zapisz</button>
            </form>

        </>
    );
}

export default ShareUserData;