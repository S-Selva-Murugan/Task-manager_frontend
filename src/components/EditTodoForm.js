import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startEditTodo } from '../actions/todos'
const EditTodoForm = (props) => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({
        _id: props._id, 
        title: props.title,
        description: props.description,
        isCompleted: props.isCompleted,
        dueDate: props.dueDate
    })

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { ...todo }
        const formReset = () => {
            setTodo({
                title: '',
                description: '',
                isCompleted: false,
                dueDate: ''
            })
        }
        console.log(formData)
        dispatch(startEditTodo(formData, formReset, props.clearDialog))
        // dispatch(startAddTodo(formData, formReset))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type="text" value={todo.title} name="title" onChange={handleChange} />
                </label> <br />

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
                </label> <br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default EditTodoForm