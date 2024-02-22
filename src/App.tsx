import Todos from "./components/Todos"
import Todo from './models/todo';



function App() {
  // const todosList : string[] = ['Learn React',' Learn Typescript']
const todos = [
  new Todo('LearnReact'),
  new Todo('LearnTS')
]

  return (
    <>
    <div>

<Todos  todosList = {todos}/>
    </div>
      
    </>
  )
}

export default App
