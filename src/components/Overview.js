import React from "react";

const Tasks = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.text}</li>
            })}
        </ul>
    )
}

export { Tasks };
