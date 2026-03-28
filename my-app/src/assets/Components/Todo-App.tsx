import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../custom.scss';
import './Todo-App.css';
import deleteIcon from '../Images/Delete-Icon.png';
import { useState } from 'react';

function TodoApp() {


    const [todos, setTodos] = useState([
        { id: 1, text: "Do Laundry", isCompleted: false },
        { id: 2, text: "Wash Dishes", isCompleted: false },
        { id: 3, text: "Eat Lunch", isCompleted: false }
    ]);

    const handleToggle = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(item =>
                item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
            )
        );
    };
    const deleteTodo = (id: number) => {
        setTodos(prevTodos =>
            prevTodos.filter(todo => todo.id !== id)
        );
    };
    const [taskInput, setTaskInput] = useState("");

    const addTodo = () => {
        // Prevent adding empty tasks
        if (taskInput.trim() === "") return;

        const newTodo = {
            id: Date.now(), // Unique ID based on timestamp
            text: taskInput,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
        setTaskInput(""); // Clear the input field after adding
    };
    
    return (
        <div className="todo-app">

            <div className="row justify-content-center align-items-center g-3">
                <div className="col flex-column align-items-center">
                    <h1 style={{ display: 'flex' }}>
                        <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
                        <input className="btn btn-secondary" type="submit" value="Add Task" onClick={addTodo}></input>
                    </h1>
                    {
                        todos.map((todo, index) => {
                            return (
                                <div className='todo'>
                                    <div key={todo.id} onClick={() => handleToggle(todo.id)} className={todo.isCompleted ? 'todo-complete' : 'todo-incomplete'}>
                                        <h2>{index + 1 + ".   " + todo.text}</h2>
                                        <img className="delete-todo-icon" onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id) }} src={deleteIcon} height="30px" width="30px"></img>
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