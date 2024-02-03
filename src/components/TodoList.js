import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DisplayDialog from './DisplayDialog'
import FormDialog from './FormDialog'
import { startDeleteTodo } from '../actions/todos'
const TodoList = (props) => {
    const [selected, setSelected] = useState({})
    const [editObj, setEditObj] = useState({})
    const dispatch = useDispatch()
    const todos = useSelector((state) => {
        return state.todos 
    })

    const handleShow = (obj) => {
        setSelected(obj) 
    }

    const clearSelected = () => {
        setSelected({})
    }

    const clearDialog = () => {
        setEditObj({})
    }

    const handleEdit = (obj) => {
        setEditObj(obj)
    }


    const handleRemove = (id) => {
        const confirmInput = window.confirm("Are you sure?")
        if (confirmInput) {
            dispatch(startDeleteTodo(id))
        }
    }

    return (
        <div> 
            <h2>Listing Todos - { todos.data.length } </h2>
            <ul>
                { todos.data.map((ele) => {
                    return <li key={ele._id}> { ele.title}
                        <button onClick={() => {
                            handleShow(ele)
                        }}>show</button>

                        <button onClick={() => {
                            handleEdit(ele)
                        }}>edit</button>
                        
                        <button onClick={() => {
                            handleRemove(ele._id)
                        }}>remove </button> 
                     </li> 
                })}
            </ul>
            {Object.keys(selected).length > 0 && <DisplayDialog {...selected} clearSelected={clearSelected}/> }
            {Object.keys(editObj).length > 0 && <FormDialog {...editObj} clearDialog={clearDialog}/>}
        </div> 
    )
}

export default TodoList 