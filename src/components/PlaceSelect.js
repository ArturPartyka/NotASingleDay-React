import React, { useContext } from 'react';
import { AppContext } from '../AppProvider';

function PlaceSelect({ placeSelect, handlePlaceSelect }) {
    const { pleaces } = useContext(AppContext)

    const decoratePlaces = () => (
        pleaces.map(place => (<option value={place}>{place.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</option>))
    )

    return (
        <label htmlFor="place">
            <select name="" id="place" value={placeSelect} onChange={handlePlaceSelect}>
                <option value="" disabled>Wybierz miasto</option>
                {decoratePlaces()}
            </select>
        </label>
    );
}

export default PlaceSelect;