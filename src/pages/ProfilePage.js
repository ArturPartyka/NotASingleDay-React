import React, { useContext, useState } from 'react';


import { AppContext } from '../AppProvider';

import ActievietesInput from './ActievietesInput';

function ProfilePage() {
    const { userData } = useContext(AppContext)

    console.log(userData.userActievietes);

    const [actualActievietyChecked, setAactualActievietyChecked] = useState(false)


    let actievietesInputs = () => {
        if (userData.userActievietes) {
            return (userData.userActievietes.map(activity => {
                return (
                    <ActievietesInput
                        key={activity.text}
                        text={activity.text}
                        activity={activity.activity}
                        checked={actualActievietyChecked}
                        click={activity.click} />)
            }))
        }
    }


    return (
        <div>
            <h3>{userData.firstName}</h3>
            <h3>{userData.lastName}</h3>
            <h4>{userData.place}</h4>
            {actievietesInputs()}

        </div>
    );
}

export default ProfilePage;