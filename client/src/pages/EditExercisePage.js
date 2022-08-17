import React from 'react';
import { useHistory, Link } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {

    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`https://swolebro-api.herokuapp.com/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date
            }),
            headers: { 'Content-Type': 'application/json', },
        });
        
        if (response.status === 200) {
            alert("Successfully modified your lift!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
            <article>
                <h2>Modify Your Lift</h2>
                <p>Getting stronger already are we? Go ahead and make your changes.</p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <fieldset>
                        {/* <legend>Edit</legend>
                        <label for="name">Exercise</label> */}
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            minLength={1}
                            required="required"
                            id="name" />
                        <label for="reps">Reps</label>
                        <input
                            type="number"
                            value={reps}
                            onChange={e => setReps(e.target.value)}
                            min="1"
                            required="required"
                            id="reps" />
                        <label for="weight">Weight</label>
                        <input
                            type="number"
                            min={1}
                            value={weight}
                            onChange={e => setWeight(e.target.value)}
                            required="required"
                            id="weight" />
                        <label for="unit">Unit</label>
                        <input
                            type="text"
                            value={unit}
                            onChange={e => setUnit(e.target.value)}
                            required="required"
                            id="unit" />
                        <label for="date">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required="required"
                            id="date" />
                        <label for="submit">
                            <button
                                onClick={editExercise}
                                id="submit"
                            >Save Changes</button>
                        </label>
                        <label for="cancel-btn">
                            <Link to="..">
                                <button id="cancel-btn">
                                    Cancel
                                </button>
                            </Link>
                        </label>
                    </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;