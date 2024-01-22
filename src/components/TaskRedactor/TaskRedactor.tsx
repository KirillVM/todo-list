import { ChangeEvent, MouseEvent, useState } from "react"

const TaskRedactor = (): JSX.Element => {
    const [taskName, setTaskName] = useState<string>('');

    const handleClickAddNewTaskButton = (e: MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        // redux functionality
    }

    return <>
        <label htmlFor="task-name">
            <input id='task-name' type="text" />
        </label>
        <label htmlFor="task-description">
            <textarea name="task-description" id="task-description"  cols={30} rows={10}></textarea>
        </label>
        <button>
            Add
        </button>
    </>
}

export default TaskRedactor;