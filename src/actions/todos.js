import axios from 'axios'
export const startGetTodos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3060/api/todos')
            dispatch(setTodos(response.data))
        } catch(e) {
            alert(e.message)
        }
    }
}

const setTodos = (data) => {
    return { type: "SET_TODOS", payload: data }
}

export const startAddTodo = (data, resetForm) => {
    return async (dispatch) => { 
        try {
            const response = await axios.post('http://localhost:3060/api/todos', data)
            resetForm()
            dispatch(addTodo(response.data))
        } catch(e) {
            alert(e.message) 
        }
    }
}

const addTodo = (todoObj) => {
    return { 
        type: "ADD_TODO", 
        payload: todoObj
    }
}

const removeTodo = (id) => {
    return { type: "REMOVE_TODO", payload: id }
}

export const startDeleteTodo = (id) => {
    return async(dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3060/api/todos/${id}`)
            dispatch(removeTodo(response.data._id))
        } catch(e) {
            alert(e.message)
        }
    }
}

export const startEditTodo = (formData, formReset, clearDialog) => {
    return async (dispatch) => {
        try {
            const response = await axios.put('http://localhost:3060/api/todos/' + formData._id, formData)
            console.log(response.data)
            formReset()
            clearDialog()
            dispatch(editTodo(response.data))
        } catch(e) {
            alert(e.message)
        }
    }
}

const editTodo = (data) => {
    return { type: "EDIT_TODO", payload: data }
}