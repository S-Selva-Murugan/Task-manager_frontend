import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayDialog from './DisplayDialog';
import FormDialog from './FormDialog';
import { startDeleteTodo } from '../actions/todos';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = (props) => {
    const [selected, setSelected] = useState({});
    const [editObj, setEditObj] = useState({});
    const dispatch = useDispatch();
    const todos = useSelector((state) => {
        return state.todos;
    });

    const handleShow = (obj) => {
        setSelected(obj);
    };

    const clearSelected = () => {
        setSelected({});
    };

    const clearDialog = () => {
        setEditObj({});
    };

    const handleEdit = (obj) => {
        setEditObj(obj);
    };

    const handleRemove = (id) => {
        const confirmInput = window.confirm("Are you sure?");
        if (confirmInput) {
            dispatch(startDeleteTodo(id));
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="todo-box">
                        <h2 className="text-center mb-4">Todo List</h2>
                        <ul className="list-group">
                            {todos.data.map((ele) => (
                                <li key={ele._id} className="list-group-item d-flex justify-content-between align-items-center funky-item">
                                    <span className="todo-title">{ele.title}</span>
                                    <div>
                                        <button className="btn btn-primary btn-sm mx-1 funky-button" onClick={() => handleShow(ele)}>Show</button>
                                        <button className="btn btn-warning btn-sm mx-1 funky-button" onClick={() => handleEdit(ele)}>Edit</button>
                                        <button className="btn btn-danger btn-sm mx-1 funky-button" onClick={() => handleRemove(ele._id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {Object.keys(selected).length > 0 && (
                            <DisplayDialog {...selected} clearSelected={clearSelected} />
                        )}
                        {Object.keys(editObj).length > 0 && (
                            <FormDialog {...editObj} clearDialog={clearDialog} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
