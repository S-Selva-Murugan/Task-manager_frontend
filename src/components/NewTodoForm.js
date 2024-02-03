import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startAddTodo } from '../actions/todos'
const NewTodoForm = (props) => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        isCompleted: false, 
        dueDate: ''
    })

    const handleChange = (e) => {
        setTodo({
            ...todo, 
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {...todo}
        const formReset = () => {
            setTodo({
                title: '',
                description: '',
                isCompleted: false,
                dueDate: ''
            })
        }
        dispatch(startAddTodo(formData, formReset))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Title
                    <input type="text" value={todo.title} name="title" onChange={handleChange} /> 
            </label> <br/> 

            <label>
                Description
                <input type="text" value={todo.description} name="description" onChange={handleChange} />
            </label> <br /> 

            <label>
                Completed
                <input type="checkbox" value={todo.isCompleted} name="isCompleted" onChange={handleChange} />
            </label> <br /> 

            
            <label>
                Title
                <input 
                    type="date" 
                    value={todo.dueDate} 
                    name="dueDate" 
                    onChange={handleChange} 
                /> 
            </label> <br/> 

            <input type="submit"  /> 
            </form>
        </div> 
    )
}

export default NewTodoForm