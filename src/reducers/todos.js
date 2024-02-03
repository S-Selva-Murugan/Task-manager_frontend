const initialState = {
    data: [], 
    errors: {}, 
    isLoading: true 
}

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_TODOS" : {
            return {...state, data: action.payload }
        }
        case "ADD_TODO" : {
            return {...state, data: [...state.data, action.payload]}
        }
        case "REMOVE_TODO" : {
            return {...state, data: state.data.filter(ele => ele._id != action.payload)}
        }
        case "EDIT_TODO" : {
            return {...state, data: state.data.map(ele => {
                if(ele._id == action.payload._id) {
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })}
        }
        default: {
            return {...state }
        }
    }
}

export default todosReducer 