import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../custom.scss';
import './Todo-App.css';
import deleteIcon from '../Images/Delete-Icon.png';
import { useState } from 'react';

function TodoApp() {
    
    //Array that is updated by state for mapping todos to the list. (Example todos already present).
    const [todos, setTodos] = useState([
        { id: 1, text: "Do Laundry", isCompleted: false },
        { id: 2, text: "Wash Dishes", isCompleted: false },
        { id: 3, text: "Eat Lunch", isCompleted: false }
    ]);

    //Used to set the filter for filtering the todos into categories.
    const [filter, setFilter] = useState<"all" | "incomplete" | "complete">("all");
    //Used to set a todo to complete or incomplete.
    const handleToggle = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(item =>
                item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };
    //Used to delete a todo.
    const deleteTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id)
        );
    };
    //State used to update the todo list when a todo is added.
    const [taskInput, setTaskInput] = useState("");
    //Used to add todos to the todo list.
    const addTodo = () => {
        if (taskInput.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: taskInput,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
        setTaskInput("");
    };

    return (
        <div className="todo-app">
            {/*To do List Title*/}
            <h1 className='todo-list-title'>
                Your To Do List
            </h1>
            <div className="row justify-content-center align-items-center g-3">
                <div className="col flex-column align-items-center">
                    {/*Filter Buttons*/}
                    <h1 style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-secondary" onClick={() => setFilter("all")}>All Todos</button>
                        <button className="btn btn-secondary" onClick={() => setFilter("incomplete")}>Incomplete</button>
                        <button className="btn btn-secondary" onClick={() => setFilter("complete")}>Complete</button>
                    </h1>
                    {/*Add Task Text Area and Button*/}
                    <h1 style={{ display: 'flex' }}>
                        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                        <input className="btn btn-secondary" type="submit" value="Add Task" onClick={addTodo}></input>
                    </h1>
                    {/*Used to filter and then map the to do list*/}
                    {
                        todos.filter((todo) => {
                            if (filter === "incomplete") return !todo.isCompleted;
                            if (filter === "complete") return todo.isCompleted;
                            return true;
                        })
                            .map((todo, index) => {
                                return (
                                    <div className='todo'>
                                        <div key={todo.id} onClick={() => handleToggle(todo.id)} className={todo.isCompleted ? 'todo-complete' : 'todo-incomplete'}>
                                            <h2>{index + 1 + ".   " + todo.text + ".    "}
                                                {/*Used to delete a todo from the list*/}
                                                <img className="delete-todo-icon" onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id) }} src={deleteIcon} height="30px" width="30px"></img>
                                            </h2>
                                        </div>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </div>
    );
}
export default TodoApp;