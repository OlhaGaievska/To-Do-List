function AddItem(props){
    let {addTodo} = props

    function addHandler(event){
        if (event.key == 'Enter'){
            addTodo(event.target.value)
        }
    }

    return (
        <div className="inp">        
            <input  placeholder="Write here ..." onKeyDown={(event) => addHandler(event)}/>
        </div>
    )
}

export default AddItem