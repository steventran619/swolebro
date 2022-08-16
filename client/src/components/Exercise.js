import React from 'react';
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function Exercise({ exercise, onEdit, onDelete }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0, 10)}</td>
            <td>
                <div className="modifier">
                    <FaPencilAlt onClick={() => onEdit(exercise)} />
                </div></td>
            <td>
                <div className="modifier">
                    <FaTrash onClick={() => onDelete(exercise._id)} />
                </div>
            </td>


        </tr >
    );
}

export default Exercise;