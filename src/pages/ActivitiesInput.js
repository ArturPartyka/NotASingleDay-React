import React from 'react';


function ActivitiesInput({ text, activity, checked, click }) {

    return (
        <label htmlFor={activity}>
            {text}
            <input type="checkbox"
                checked={checked}
                onChange={click} />
        </label>
    );
}

export default ActivitiesInput;