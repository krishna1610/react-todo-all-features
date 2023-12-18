import React, {useState} from "react";

const TodoInput = ({setTodoItems, todoItems, displayList, setDisplayList}) => {
    const [todoName, setTodoName] = useState("");

    const addTodo = () => {
        setTodoItems([...todoItems, todoName]);
        setDisplayList([...displayList, todoName]);
        setTodoName('');
    }

    return (<div>
        <div className="header-section">TodoInput</div>
        <div className="todo-input-box">
            <div className="todo-box-divs">
                <input
                    type="text"
                    placeholder="New Todo"
                    className="todo-input-field"
                    value={todoName}
                    onChange={(e)=>setTodoName(e.target.value)}
                />
            </div>
            <div className="todo-box-divs">
                <button
                    className="add-button"
                    onClick={addTodo}
                >Add New Task</button>
            </div>
        </div>
    </div>)
};

export default TodoInput;
