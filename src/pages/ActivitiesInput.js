import React from 'react';


function ActivitiesInput({ text, activity, checked, click }) {

    return (
        <label className='activitiesInputLabel' htmlFor={activity}>

            <input type="checkbox"
                className='activitiesInput'
                checked={checked}
                onChange={click} />
            {text}
        </label>
    );
}

export default ActivitiesInput;