import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../custom.scss';
function Todo(id,text) {

    return (
        <div>
            <h1>{id}</h1>
            <h2>{text}</h2>
            <input type="checkbox" name="taskCheckbox" id="taskCheckbox" />
        </div>
    );

}
export default Todo;