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
    /*
    const addTodo = (id: todos.length,) => {


    };
    */
    return (
        <div className="todo-app">
            <div className="row justify-content-center align-items-center g-3">
                <div className="col flex-column align-items-center">
                    <div >
                        {
                            todos.map((todo, index) => {

                                return (
                                    <div className='todo'>
                                        <div key={todo.id}onClick={() => handleToggle(todo.id)} className={todo.isCompleted ? 'todo-complete' : 'todo-incomplete'}>
                                            <h1>{index+1 + ".   " + todo.text}</h1>
                                            <img className="delete-todo-icon" onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id) }} src={deleteIcon} height="30px" width="30px"></img>
                                            {/*<input type="checkbox" name="taskCheckbox" id={"taskCheckbox-" + todo.id} defaultChecked={false} onChange={() => handleToggle(todo.id)} />*/}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TodoApp;