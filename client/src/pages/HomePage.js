import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExercise }) {
    // Use the history for updating
    const history = useHistory();

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch('https://swolebrodb.onrender.com/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    } 
    

    // UPDATE a exercise
    const onEditExercise = async exercise => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }


    // DELETE a exercise  
    const onDeleteExercise = async _id => {
        const response = await fetch(`https://swolebrodb.onrender.com/exercises/${_id}`, { method: 'DELETE' });
        // const response = await fetch(`https://swolebro-api.herokuapp.com/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
            alert("Exercise Removed!");
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}. Error Code = ${response.status}`)
        }
    }

    // LOAD the exercises
    useEffect(() => {
        loadExercises();
    }, []);
    

    // DISPLAY the exercises
    return (
        <>
            <article>
                <h2>About</h2>
                <p>Here you can view, modify, and delete your existing lifts or exercises. <br></br>To add a new exercise, select the "Add Exercise" button above.</p>
                <ExerciseList 
                    exercises={exercises} 
                    onEdit={onEditExercise} 
                    onDelete={onDeleteExercise} 
                />
            </article>
        </>
    );
}

export default HomePage;