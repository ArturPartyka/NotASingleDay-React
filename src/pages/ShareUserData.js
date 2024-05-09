import React, { useContext, useState, useEffect } from 'react';

import ActivitiesInput from './ActivitiesInput';
import PlaceSelect from '../components/PlaceSelect';
import { AppContext } from '../AppProvider';



function ShareUserData() {
    const { userData } = useContext(AppContext)

    const [newPlaceSelect, setNewPlaceSelect] = useState('')
    const [selectPlaceToggle, setSelectPlaceToggle] = useState(false)
    const [selectActivitiesToggle, setSelectActivitiesToggle] = useState(true)
    const [newActivities, setNewActivities] = useState(userData.userActivities)
    // const newActivities = userData.userActivities ? [...userData.userActivities] : [];
    //useMemo newActivities

    let handleUserPlaceSelect = e => {
        setNewPlaceSelect(e.target.value)
        setSelectPlaceToggle(!selectPlaceToggle)
    }


    let handleSelectPlaceToggleButton = () => setSelectPlaceToggle(!selectPlaceToggle)

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

    let activitiesInputs = () => {
        let decoratedNewActivities = newActivities.map(activity => ({
            ...activity,
            click: () => {
                let arrActivities = [...decoratedNewActivities]
                const activityIndex = arrActivities.findIndex(act => act.type == activity.type)
                arrActivities[activityIndex].checked = !arrActivities[activityIndex].checked
                decoratedNewActivities = arrActivities
                setNewActivities(decoratedNewActivities)
            }
        }))
        return (
            decoratedNewActivities.map(activity => {
                return (
                    <ActivitiesInput
                        key={activity.type}
                        text={activity.text}
                        activity={activity.type}
                        checked={activity.checked}
                        click={activity.click} />)
            })
        )
    }
    const currentData = new Date()
    console.log(newPlaceSelect);
    return (
        <>
            <div>
                <span>Wybierz miejsce:</span>
                {selectPlaceToggle ?
                    <label>
                        <input type="text" value={newPlaceSelect == '' ? userData.place : newPlaceSelect} readOnly />
                        <button onClick={handleSelectPlaceToggleButton}>Zmień</button>
                    </label> :
                    <PlaceSelect placeSelect={newPlaceSelect == '' ? userData.place : newPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
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
                    <button onClick={handleSelectActivitiesToggleButton}>Zmień</button>
                </div> :
                <div>Nie ma aktywności</div>
            }
            <div>
                <label htmlFor="">
                    określ czas
                    od kiedy masz czas:
                    <input type="datetime-local" name="" id="" />
                    do kiedy masz czas:
                    <input type="datetime-local" name="" id="" />
                </label>
            </div>

        </>
    );
}

export default ShareUserData;