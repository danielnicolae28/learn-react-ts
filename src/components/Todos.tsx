import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
//  type TodosProps = {
//     todosList:string[]
// }


const Todos: React.FC<{todosList:Todo[]}> = (props)=> {
  return (
    <ul>
{props.todosList.map((item)=>(
    <TodoItem key={item.id} text = {item.text}/>


))}
    </ul>
  )
}

export default Todos