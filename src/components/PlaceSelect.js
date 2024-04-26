import React from 'react';

function PlaceSelect({ placeSelect, handlePlaceSelect }) {
    return (
        <label htmlFor="place">
            <select name="" id="place" value={placeSelect} onChange={handlePlaceSelect}>
                <option value="" disabled>Wybierz miasto</option>
                <option value="Wrocław">Wrocław</option>
                <option value="Kraków">Kraków</option>
                <option value="Warszawa">Warszawa</option>
                <option value="Łódź">Łódź</option>
                <option value="Rzeszów">Rzeszów</option>
                <option value="Katowice">Katowice</option>
            </select>
        </label>
    );
}

export default PlaceSelect;