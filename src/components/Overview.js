import React from "react";
import trash from "./trash-can.png";

const Tasks = (props) => {
    const { tasks, deleteBtn } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.number + '. ' + task.text} <Delete task={task} remove={deleteBtn}/></li>
            })}
        </ul>
    )
}

const Delete = (props) => {
    const { task, remove } = props;

    return (
        <button onClick={() => remove(task)}>
            <img src={trash} alt="delete"></img>
        </button>
    )
}

export { Tasks };
