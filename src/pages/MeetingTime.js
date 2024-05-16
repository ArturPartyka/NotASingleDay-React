import React, { useState } from "react";

function MeetingTime() {

    const currentDate = new Date().toISOString().slice(0, 16)

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