import { useEffect, useState } from "react"
import AddItem from "./AddItem"
import TodoList from "./TodoList"
import './style.css'
import { Context } from "../context"
import wing from './wing.png';


let start_todos = [
    {id: 1, title: 'first', complited: true},
    {id: 2, title: 'second', complited: false},    
]

function App(){
    const [todos, setTodos] = useState(start_todos)

    useEffect(()=>{
        let data = localStorage.getItem('todos')
        setTodos(JSON.parse(data))
    },[])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    function addTodo(title){
        let todo = {
            id: Math.max(...todos.map(elem=> elem.id)) + 1, 
            title: title, 
            complited: false
        }
        setTodos([...todos,todo])
    }

    function deleteTodo(id){
        setTodos(todos.filter(elem => elem.id != id))
    }

    function changeTodo(id){
        setTodos(todos.map(elem => {
            if (elem.id == id){
                elem.complited = !elem.complited
            }
            return elem
        }))
    }

    console.log(todos)
    return (
        <div class="main">
            <h1 class="class_h1">TO DO LIST</h1>
            <div className="wing">
            <img
                src={wing}
                alt="wing_photo"
                class="wing_photo"
            />          
                <p>click to make done</p>   
            </div>
            <div className="wing">
            <img
                src={wing}
                alt="wing_photo"
                class="wing_photo"
            />  
                <p>click twice to delete</p>   
            </div>            
            <Context.Provider value={{deleteTodo, changeTodo}}>
                <AddItem addTodo = {addTodo}/>
                <TodoList todos = {todos} />
            </Context.Provider>
        </div> 
    )
}

export default App