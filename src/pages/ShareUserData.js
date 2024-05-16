import React, { useContext, useState } from 'react';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import MeetingTime from './MeetingTime';

import { AppContext } from '../AppProvider';


function ShareUserData() {
    const { userData, sharedUserData, setSharedUserData } = useContext(AppContext)

    const [newPlaceSelect, setNewPlaceSelect] = useState('')
    const [selectPlaceToggle, setSelectPlaceToggle] = useState(false)
    const [selectActivitiesToggle, setSelectActivitiesToggle] = useState(true)
    const [newActivities, setNewActivities] = useState(userData.userActivities)

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
            ...sharedUserData,
            place: newPlaceSelect,
            activities: checkedActivities,
            begginingTime: '',
            endingTime: '',
        }
        setSharedUserData(newSharedUserData)
    }
    console.log(sharedUserData);
    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <span>Wybierz miejsce:</span>
                    {selectPlaceToggle ?
                        <label>
                            <input type="text" value={newPlaceSelect === '' ? userData.place : newPlaceSelect} readOnly />
                            <button type="button" onClick={handleSelectPlaceToggleButton}>Zmień</button>
                        </label> :
                        <PlaceSelect placeSelect={newPlaceSelect === '' ? userData.place : newPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
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
                <MeetingTime />
                <button type='submit'>Zapisz</button>
            </form>

        </>
    );
}

export default ShareUserData;