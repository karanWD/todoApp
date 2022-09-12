import React, {useState} from "react"

const TodoList = ({tasks, checkHandler, updateHandler, deleteHandler}) => {
    const [editable, setEditable] = useState(null)
    const [updatedValue, setUpdatedValue] = useState(null)
    const editHandler = (event, id) => {
        event.stopPropagation()
        setEditable(id)
    }
    const closeEditHandler = (event) => {
        event.stopPropagation()
        setUpdatedValue(null)
        setEditable(null)
    }

    return (
        tasks?.length > 0 ?
            <ul className={`task-lists col-12`}>
                {
                    tasks.map(item =>
                        <li key={item.id}
                            className={`${item.checked ? `done` : ``}`}>
                            {
                                editable === item.id ?
                                    <div className={`d-flex justify-content-between align-items-center p-3 `}>
                                        <input type="text" value={updatedValue ? updatedValue : item.text}
                                               onChange={(e) => setUpdatedValue(e.target.value)}/>
                                        <div>
                                            <span className={`text-primary px-2 cursor-pointer`} onClick={async () => {
                                                await updateHandler(item.id, updatedValue);
                                                await setEditable(null);
                                                setUpdatedValue(null)
                                            }}>save</span>
                                            <span className={`text-secondary px-2 cursor-pointer`}
                                                  onClick={(e) => closeEditHandler(e)}>cancel</span>
                                        </div>
                                    </div>
                                    :
                                    <div className={`d-flex justify-content-between align-items-center p-3`}
                                         onClick={(e) => checkHandler(e, item.id)}
                                    >
                                     <span className={`todo-text`}>{item.text}</span>
                                     {
                                            item.checked ?
                                                <span className={`done-text`}>
                                                Done
                                            </span>
                                                :
                                                <div>
                                                 <span className={`text-secondary cursor-pointer`}
                                                       onClick={(e) => editHandler(e, item.id)}>
                                                    Edit
                                                 </span>
                                                    <span className={`text-danger ps-3 cursor-pointer`}
                                                          onClick={(e) => deleteHandler(e, item.id)}
                                                    >
                                                     delete
                                                 </span>
                                                </div>
                                     }
                                    </div>
                            }

                        </li>
                    )
                }
            </ul>
            :
            null
    )
}

export default TodoList