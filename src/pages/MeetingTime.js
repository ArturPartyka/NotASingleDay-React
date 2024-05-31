import React, { useState } from "react";

function MeetingTime() {

    const hours = parseInt(new Date().toISOString().slice(11, 13)) + 2
    const date = new Date().toISOString()
    const currentDate = date.slice(0, 11) + hours + date.slice(13, 16)

    const [begginingTime, setBegginingTime] = useState(currentDate)
    const [endingTime, setEndingTime] = useState(currentDate)

    let handleNewDate = e => setBegginingTime(e.target.value)
    let handleEndingTime = e => setEndingTime(e.target.value)
    return (
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
    );
}

export default MeetingTime;