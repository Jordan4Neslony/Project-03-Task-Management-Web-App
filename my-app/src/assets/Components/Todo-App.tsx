import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../custom.scss';
import './Todo-App.css';
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
                            todos.map((todo) => {

                                return (
                                    <div onClick={() => handleToggle(todo.id)}
                                        className={todo.isCompleted ? 'todo-complete' : 'todo-incomplete'}>
                                        <h1>{todo.id + ".   " + todo.text}</h1>
                                        {/*<input type="checkbox" name="taskCheckbox" id={"taskCheckbox-" + todo.id} defaultChecked={false} onChange={() => handleToggle(todo.id)} />*/}
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