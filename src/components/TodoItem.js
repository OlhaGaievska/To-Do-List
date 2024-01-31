import { useContext } from "react"
import { Context } from "../context"

function TodoItem(props){
    const {title, complited, id} = props
    const {deleteTodo, changeTodo} = useContext(Context)

    return (
        <div 
            className="container" 
            onClick={() => changeTodo(id)} 
            onDoubleClick={() => deleteTodo(id)}
            style={{backgroundColor: (complited) ? 'DarkSeaGreen' : 'LightCoral'}}
        >
            <p className="container_titel">{title}</p>            
            {(complited) ? <p className="done">Done &#10003;</p> : <p className="not_done">Not done &#128939;</p>}
            
        </div>
    )
}


export default TodoItem