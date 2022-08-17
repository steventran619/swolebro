import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');
    
    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('https://swolebro-api.herokuapp.com/exercises', {
            method: 'post',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Nice work! Now on to the next set!");
        } else {
            alert(`Error ${response.status}: "Invalid request"`);
        }
        history.push("/");
    };

    return (
        <>
        <article>
            <h2>Add a new exercise</h2>
            <p>Fill in the following to add a new exercise to your workout</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    {/* <legend>Which exercise are you adding?</legend> */}
                    <p><label for="name">Exercise name</label>
                    <input
                        type="text"
                        placeholder="Squat, Bench, Deadlift, eg."
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required="required"
                        minLength="1"
                        id="name" /></p>
                    <p><label for="reps">Reps Completed</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="# of Reps"
                        onChange={e => setReps(e.target.value)} 
                        min="1"
                        required="required"
                        id="reps" /></p>
                    <p><label for="weight">Weight</label>
                    <input
                        type="number"
                        placeholder="###"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        min="1"
                        required="required"
                        id="weight" /></p>
                    <p><label for="unit">Unit</label>
                    <input
                        type="text"
                        placeholder="lbs, kgs, miles, etc."
                        value={unit}
                        onChange={e => setUnit(e.target.value)} 
                        required="required"
                        id="unit" /></p>
                    <p><label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        required="required"
                        id="date" /></p>
                    <p><label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add New Exercise</button></label>
                    </p>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;