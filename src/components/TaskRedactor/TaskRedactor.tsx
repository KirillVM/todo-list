import { ChangeEvent, FormEvent, FormEventHandler, MouseEvent, useState } from "react"

const TaskRedactor = (): JSX.Element => {
    const [taskName, setTaskName] = useState<string>('');

    const handleSubmitForm = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        // redux functionality
    }

    return <>
        <form action="" onSubmit={handleSubmitForm}>
          <label htmlFor="task-name" className="">
            <input id='task-name' type="text" className=""/>
          </label>
          <label htmlFor="task-description" className="">
            <textarea name="task-description" id="task-description"  cols={30} rows={10}></textarea>
          </label>
          <button  className="">
              Add
          </button>
        </form>

    </>
}

export default TaskRedactor;