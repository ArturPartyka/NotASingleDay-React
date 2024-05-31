import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../AppProvider';

function FindUsers() {
    const [fittedRandomUserData, setFittedRandomUserData] = useState(null)
    const { randomUserData, activities } = useContext(AppContext)

    const drawUsersActivities = () => {
        const activitiesIndexes = []
        const numberOfActiviteis = Math.floor(Math.random() * 10 + 1)
        for (let i = 0; i < numberOfActiviteis; i++) {
            const activitiIndex = Math.floor(Math.random() * activities.length)
            if (!activitiesIndexes.includes(activitiIndex)) {
                activitiesIndexes.push(activitiIndex)
            }
        }
        const randomUserActiviteis = []
        activitiesIndexes.map(index => (
            randomUserActiviteis.push(activities[index])
        ))
        return randomUserActiviteis
    }

    useEffect(() => {
        // console.log(randomUserData);
        const newFittedData = randomUserData.results.map(user => {
            drawUsersActivities()
            return {
                firstName: user.name.first,
                lastName: user.name.last,
                gender: user.gender,
                activities: drawUsersActivities(),
                // time:
            }
        })
        console.log(newFittedData);
        // setFittedRandomUserData(newFittedData)
    }, [randomUserData])
    return (
        <div>
            {/* {fittedRandomUserData} */}
        </div>
    );
}

export default FindUsers;