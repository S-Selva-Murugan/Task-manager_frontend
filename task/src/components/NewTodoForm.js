import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startAddTodo } from '../actions/todos';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewTodoForm = (props) => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        isCompleted: false,
        dueDate: ''
    });

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { ...todo };
        const formReset = () => {
            setTodo({
                title: '',
                description: '',
                isCompleted: false,
                dueDate: ''
            });
        };
        dispatch(startAddTodo(formData, formReset));
    };

    return (
        <div className="container mt-4" style={{width:"500px", marginRight:"1000px"}}>
            <div className="card bg-grey text-black p-4">
                <h3 className="mb-4">New Todo</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" value={todo.title} name="title" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" value={todo.description} name="description" onChange={handleChange} />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" checked={todo.isCompleted} name="isCompleted" onChange={handleChange} />
                        <label className="form-check-label">Completed</label>
                    </div>

                    <div className="form-group">
                        <label>Due Date</label>
                        <input type="date" className="form-control" value={todo.dueDate} name="dueDate" onChange={handleChange} />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewTodoForm;
