import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppProvider';

function UserData() {
    const { randomUserData, sharedUserData } = useContext(AppContext)
    const navigate = useNavigate()

    let activitiesInputs = () => {
        if (sharedUserData.activities) {
            if (randomUserData) {

            }
            const checkedActivities = sharedUserData.activities.filter(activity => activity.checked)
            return (checkedActivities.map(activity => {
                return (
                    <li key={activity.text}>
                        {activity.text}
                    </li>)
            }))
        }
    }
    let handleProfileEditButtonCLick = () => {
        navigate('/share-user-data')
    }
    return (
        <>
            <div>
                <h3>Imię: {sharedUserData.firstName}</h3>
                <h3>Nazwisko: {sharedUserData.lastName}</h3>
                <h4>Miejsce: {sharedUserData.place}</h4>
                <h4>Płeć: {sharedUserData.gender}</h4>
                <h4>Twoje aktywności:</h4>
                <ul>
                    {activitiesInputs()}
                </ul>
                <h4>Masz czas od: {sharedUserData.begginingTime.slice(0, 10)} {sharedUserData.begginingTime.slice(11, 16)} do:
                    {sharedUserData.endingTime.slice(0, 10)} {sharedUserData.endingTime.slice(11, 16)}
                </h4>
                <button onClick={handleProfileEditButtonCLick}>Edytuj profil</button>
            </div>
        </>
    );
}

export default UserData;