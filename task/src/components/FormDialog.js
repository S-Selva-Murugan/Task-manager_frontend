import EditTodoForm from './EditTodoForm' 
const FormDialog = (props) => {
    return (
        <div>
            <dialog open>
                <EditTodoForm {...props} /> 
            </dialog>
        </div> 
    )
}

export default FormDialog