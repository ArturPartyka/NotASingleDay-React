import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../AppProvider';
import MeetingTime from './MeetingTime';
import { Link } from 'react-router-dom';

function FindUsers() {
    const [fittedRandomUserData, setFittedRandomUserData] = useState([])
    // const [decoratedUsersData, setDecoratedUsersData] = useState()
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
        console.log(randomUserActiviteis);
        return randomUserActiviteis
    }

    const randomUserMeetingTime = () => {
        const currentTime = new Date()
        const endOfBegginingTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1)

        const randomBegginingDate = new Date(currentTime.getTime() + Math.random() * (endOfBegginingTime.getTime() - currentTime.getTime()))

        const endofEndingTime = new Date(randomBegginingDate.getFullYear(), randomBegginingDate.getMonth(), randomBegginingDate.getDate() + 1)
        const randomEndingDate = new Date(randomBegginingDate.getTime() + Math.random() * (endofEndingTime.getTime() - randomBegginingDate.getTime()))


        const userMeetingTime = {
            start: randomBegginingDate.toISOString(),
            end: randomEndingDate.toISOString(),
        }

        return (userMeetingTime);
    }



    useEffect(() => {
        const newFittedData = randomUserData.results.map(user => {
            drawUsersActivities()
            return {
                firstName: user.name.first,
                lastName: user.name.last,
                gender: user.gender,
                activities: drawUsersActivities(),
                time: randomUserMeetingTime()
            }
        })
        setFittedRandomUserData(newFittedData)

    }, [randomUserData])




    const decoratedUserData = (users) => (
        users.map(user => {
            const decoratedAct = user.activities.map(act => <li>{act.text}</li>)
            console.log(user.activities);
            return (
                <div>
                    <li>
                        <div>{user.firstName}</div>
                        <div>{user.lastName}</div>
                        <div>{user.gender}</div>
                        <div>{user.time.start}</div>
                        <div>{user.time.end}</div>
                    </li>
                    <ul>
                        {decoratedAct}
                    </ul>
                </div>
            )
        }))



    return (
        <ul>
            {decoratedUserData(fittedRandomUserData)}
        </ul>
    );
}

export default FindUsers;