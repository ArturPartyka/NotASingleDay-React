import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../AppProvider';

// import ActivitiesInput from './ActivitiesInput';

function ProfilePage() {
    const { userData } = useContext(AppContext)
    const navigate = useNavigate()

    // const [actualActivitiesChecked, setAactualActivitiesChecked] = useState(false)

    let handleProfileEditButtonCLick = () => {
        navigate('/NewProfilePage')
    }

    let activitiesInputs = () => {
        if (userData.userActivities) {
            return (userData.userActivities.map(activity => {
                return (
                    <li key={activity.text}>
                        {activity.text}
                    </li>)
            }))
        }
    }

    return (
        <div>
            <h3>Imię: {userData.firstName}</h3>
            <h3>Nazwisko: {userData.lastName}</h3>
            <h4>Miejsce: {userData.place}</h4>
            <h4>Płeć: {userData.gender}</h4>
            <h4>Twoje aktywności:</h4>
            <ul>
                {activitiesInputs()}
            </ul>
            <button onClick={handleProfileEditButtonCLick}>Edytuj profil</button>
        </div>
    );
}

export default ProfilePage;