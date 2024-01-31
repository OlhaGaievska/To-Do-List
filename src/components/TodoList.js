import TodoItem from "./TodoItem"

function TodoList(props){
    const {todos} = props
    return (
        <div className="box">
            {todos.map(elem => 
                <TodoItem
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    complited={elem.complited}
                />)}
        </div>
    )
}

export default TodoList