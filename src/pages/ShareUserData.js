import React, { useContext, useState, useEffect } from 'react';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import { AppContext } from '../AppProvider';



function ShareUserData() {
    const { userData, activities } = useContext(AppContext)

    const [newPlaceSelect, setNewPlaceSelect] = useState('')
    const [selectPlaceToggle, setSelectPlaceToggle] = useState(false)
    const [selectActivitiesToggle, setSelectActivitiesToggle] = useState(true)

    let handleUserPlaceSelect = e => {
        setNewPlaceSelect(e.target.value)
        setSelectPlaceToggle(!selectPlaceToggle)
    }

    let newActivities = []
    userData.userActivities.map(activity => {
        newActivities.push(activity)
    })
    console.log(newActivities);

    let handleSelectPlaceToggleButton = () => setSelectPlaceToggle(!selectPlaceToggle)
    let handleSelectActivitiesToggleButton = () => {
        setSelectActivitiesToggle(!selectActivitiesToggle)

        let currentActivites = activities.filter(activity => activity.currentChecked)
        setActiveActivities(currentActivites)

    }


    const [activeActivities, setActiveActivities] = useState(newActivities)

    let activeUserActivities = () => activeActivities.map(activity =>
        <li key={activity.text}><input type="text" value={activity.text} readOnly /></li>)



    let activitiesInputs = () => activities.map(activity => {
        return (
            <ActivitiesInput
                key={activity.text}
                text={activity.text}
                activity={activity.activity}
                checked={activity.currentChecked}
                click={activity.currentClick} />)
    })

    return (

        <>

            <div>
                <span>Wybierz miejsce:</span>
                {selectPlaceToggle ?
                    <label>
                        <input type="text" value={newPlaceSelect === "" ? userData.place : newPlaceSelect} readOnly />
                        <button onClick={handleSelectPlaceToggleButton}>Zmień</button>
                    </label> :
                    <PlaceSelect placeSelect={newPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
                }
            </div>
            {userData.userActivities ?
                <div>
                    <span>Wybierz aktywności:</span>
                    {selectActivitiesToggle ?
                        <div>
                            {activeUserActivities()}
                        </div> :
                        <div>
                            {activitiesInputs()}
                        </div>
                    }
                    <button onClick={handleSelectActivitiesToggleButton}>Zmień</button>
                </div> :
                <div>Nie ma aktywności</div>
            }

        </>
    );
}

export default ShareUserData;