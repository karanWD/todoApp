import React, {createContext, useState} from "react"
import { v4 as uuid } from 'uuid';

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([])

    const addHandler = (data) => {
        if (data){
            const taskItem = {
                id:uuid(),
                data:data,
                checked:false
            }
            setTasks(prevState => [...prevState, taskItem])
        }

    }
    const checkHandler = (event,id)=>{
        event.stopPropagation()
        tasks.filter(item=>item.id===id)[0].checked=!tasks.filter(item=>item.id===id)[0].checked
        setTasks([...tasks])
    }
    const updateHandler = (id,value)=>{
        tasks.filter(item=>item.id===id)[0].text = value
        setTasks(tasks)
    }
    const deleteHandler = (event,id)=>{

        event.stopPropagation()
        const deleted = tasks.filter(item => item.id !== id)
        setTasks(deleted)
    }

    return (
        <TodoContext.Provider value={{tasks,addHandler,checkHandler,updateHandler,deleteHandler}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider