import React, {useState} from "react"
import TodoList from "./TodoList";
import Input from "./Input";
import {v4 as uuidv4} from "uuid"

const TodoApp = () => {
    const [tasks, setTasks] = useState(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[])
    const addHandler = (value) => {
        if (value.length > 0) {
            const item = {
                id: uuidv4(),
                text: value,
                checked:false
            }
            setTasks([...tasks, item])
            localStorage.setItem("tasks",JSON.stringify([...tasks,item]))
        }
    }
    const checkHandler = (event, id) => {
        event.stopPropagation()
        const selectedTask =  tasks.find(item => item.id === id)
        selectedTask.checked = !selectedTask.checked
        setTasks([...tasks])
        localStorage.setItem("tasks",JSON.stringify([...tasks]))
    }
    const updateHandler = (id, value) => {
        tasks.find(item => item.id === id).text = value
        setTasks([...tasks])
        localStorage.setItem("tasks",JSON.stringify([...tasks]))
    }
    const deleteHandler = (event, id) => {
        event.stopPropagation()
        const deleted = tasks.filter(item => item.id !== id)
        setTasks(deleted)
        localStorage.setItem("tasks",JSON.stringify(deleted))

    }

    return (
        <section className={`col-12 pt-5 container d-flex flex-wrap col-lg-5 mx-auto justify-content-center align-items-center`}>
            <Input
                addHandler={addHandler}
                title={`Type Your Task`}
            />
            <TodoList
                tasks={tasks}
                checkHandler={checkHandler}
                updateHandler={updateHandler}
                deleteHandler={deleteHandler}
            />
        </section>
    )

}


export default TodoApp