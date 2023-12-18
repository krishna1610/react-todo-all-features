import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import React, {useState} from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [displayList, setDisplayList] = useState([]);


  return (
    <div className="app-style">
     <TodoInput
        setTodoItems={setTodoItems}
        todoItems={todoItems}
        displayList={displayList}
        setDisplayList={setDisplayList}
     />
     {displayList.length > 0 && <TodoList
                                  todoItems={todoItems}
                                  setTodoItems={setTodoItems}
                                  displayList={displayList}
                                  setDisplayList={setDisplayList}
                              />}
    </div>
  );
}

export default App;
