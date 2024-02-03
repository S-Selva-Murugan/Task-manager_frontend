const DisplayDialog = (props) => {
    const { clearSelected  } = props
    return (
        <dialog open>{ props.title }
            <button onClick={clearSelected}>x</button>
        </dialog>
    )
}

export default DisplayDialog 