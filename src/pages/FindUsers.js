import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../AppProvider';
import PlaceSelect from '../components/PlaceSelect';
import ActivitiesInput from './ActivitiesInput';


function FindUsers() {

    const { activities, randomUserData, pleaces, userData } = useContext(AppContext)

    const [fittedRandomUserData, setFittedRandomUserData] = useState([])
    const [newPlaceSelect, setNewPlaceSelect] = useState('')
    const [newActivities, setNewActivities] = useState(userData.userActivities)
    const [userGenderSelect, setUserGenderSelect] = useState('')
    const [serchingData, setSearchingData] = useState({
        pleace: '',
        activities: [],
        gender: '',
        begginingTime: '',
        endingTime: '',
    })
    const [filteredRandomUsers, setFilteredRandomUsers] = useState()
    const [timeInput, setTimeInput] = useState(false)

    const hours = parseInt(new Date().toISOString().slice(11, 13)) + 2
    const date = new Date().toISOString()
    const currentDate = date.slice(0, 11) + hours + date.slice(13, 16)
    const [begginingTime, setBegginingTime] = useState(currentDate)
    const [endingTime, setEndingTime] = useState(currentDate)

    useEffect(() => {
        if (randomUserData) {

            const newFittedData = randomUserData.results.map(user => {
                drawUsersActivities()
                return {
                    firstName: user.name.first,
                    lastName: user.name.last,
                    gender: user.gender === 'male' ? 'Mężczyzna' : 'Kobieta',
                    pleace: randomUserPleace(),
                    activities: drawUsersActivities(),
                    time: randomUserMeetingTime()
                }
            })
            setFittedRandomUserData(newFittedData)
        }

    }, [randomUserData])

    useEffect(() => filterData(), [serchingData])
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

    const randomUserMeetingTime = () => {
        const isoTime = new Date()
        const time = isoTime.setHours(isoTime.getHours() + 2)
        const currentTime = new Date(time)

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

    const randomUserPleace = () => {
        const pleaceIndex = Math.floor(Math.random() * pleaces.length)
        const randomPleace = pleaces[pleaceIndex]
        // const upperCaseRandomPleace = randomPleace.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return randomPleace
    }



    const handleTimeInput = () => {
        setTimeInput(!timeInput)
    }

    const decoratedUserData = (users) => (
        users.map((user, index) => {
            const decoratedAct = user.activities.map(act => <li key={act.text}>{act.text}</li>)
            return (
                <li key={index}>
                    <li>
                        <div>{user.firstName}</div>
                        <div>{user.lastName}</div>
                        <div>{user.gender}</div>
                        <div>{user.pleace.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</div>
                        <div>{user.time.start.slice(0, 10)}  {user.time.start.slice(11, 16)}</div>
                        <div>{user.time.end.slice(0, 10)}  {user.time.end.slice(11, 16)}</div>

                    </li>
                    <ul>
                        {decoratedAct}
                    </ul>
                </li>
            )
        }))

    const handleUserPlaceSelect = e => {
        setNewPlaceSelect(e.target.value)
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
    const hendleUserGenderSelect = e => setUserGenderSelect(e.target.value)
    const handleBegginingTime = e => setBegginingTime(e.target.value)
    const handleEndingTime = e => setEndingTime(e.target.value)

    const filterData = () => {

        let filteredData = fittedRandomUserData
        console.log(filteredData);
        if (serchingData.pleace) {
            filteredData = filteredData.filter(user => user.pleace === serchingData.pleace)
        }
        if (serchingData.gender) {
            console.log(serchingData.gender);
            filteredData = filteredData.filter(user => user.gender === serchingData.gender)
        }
        if (timeInput) {
            filteredData = filteredData.filter(user => (!(user.time.start > serchingData.endingTime) && !(user.time.end < serchingData.begginingTime)))
        }
        if (serchingData.activities.length > 0) {
            const activityTypes = serchingData.activities.map(activity => activity.type)

            let arr = []
            for (let i = 0; i < filteredData.length; i++) {
                let data = filteredData[i]
                let userActivityTypes = data.activities.map(it => it.type)

                if (userActivityTypes.some(userActivity => activityTypes.includes(userActivity))) {
                    arr.push(data)
                }
                // for (let i = 0; i < activityTypes.length; i++) {
                //     if (userActivityTypes.includes(activityTypes[i])) {
                //         arr.push(data)
                //         break;
                //     }
                // }
            }
            filteredData = arr
            // console.log(arr);
        }
        console.log(filteredData);
        setFilteredRandomUsers(filteredData)

    }

    const handleSubmit = e => {
        setSearchingData({
            pleace: newPlaceSelect,
            activities: newActivities.filter(activity => activity.checked),
            gender: userGenderSelect,
            begginingTime: begginingTime,
            endingTime: endingTime,
        })

    }


    return (
        <>
            <form action="" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                <div>
                    <span>Wybierz miejsce:</span>
                    <PlaceSelect placeSelect={newPlaceSelect} handlePlaceSelect={handleUserPlaceSelect} />
                </div>
                {activitiesInputs()}
                <br />
                <select name="" id="gender" value={userGenderSelect} onChange={hendleUserGenderSelect}>
                    <option value="" disabled>Wybierz płeć</option>
                    <option value="Kobieta">Kobieta</option>
                    <option value="Mężczyzna">Mężczyna</option>
                </select>
                <br />
                <label htmlFor="">
                    Chcę określić czas
                    <input type="checkbox" checked={timeInput} onChange={handleTimeInput} />
                </label>
                <br />
                {timeInput ?
                    <div>
                        od kiedy masz czas:
                        <input type="datetime-local" value={begginingTime} onChange={handleBegginingTime} min={currentDate} />
                        do kiedy masz czas:
                        <input type="datetime-local" value={endingTime} onChange={handleEndingTime} min={begginingTime} />
                    </div>
                    : null
                }


                <button type='submit' >szukaj</button>
            </form>
            <ul className='usersData'>
                {filteredRandomUsers ? decoratedUserData(filteredRandomUsers) : decoratedUserData(fittedRandomUserData)}
            </ul>
        </>
    );
}

export default FindUsers;