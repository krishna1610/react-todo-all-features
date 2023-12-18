import React, {useState} from "react";

const TodoList = ({todoItems, setTodoItems, displayList, setDisplayList}) => {
    const [editIndex, setEditIndex] = useState(-1);
    const [editValue, setEditValue] = useState('');
    const [doneItems, setDoneItems] = useState([]);

    const removeItem = (index) => {
        const copyItems = [...todoItems];
        copyItems.splice(index,1);
        setTodoItems(copyItems);
        setDisplayList(copyItems);
    };

    const editItem = (index) => {
        setEditIndex(index);
    };

    const saveEditedItem = () => {
        const copyItems = [...todoItems];
        copyItems[editIndex] = editValue;
        setTodoItems(copyItems);
        setDisplayList(copyItems);
        setEditIndex(-1);
        setEditValue('');
    };

    const checkedItem = (e, itemName) => {
        if(e.target.checked){
            setDoneItems([...doneItems, itemName]);
        }else{
            const newLists = doneItems.filter((item)=>{
                return item !== itemName;
            });
            setDoneItems(newLists);
        }
    };

    const deleteAllTasks = () => {
        setTodoItems([]);
        setDisplayList([]);
    };

    const deleteDoneTasks = () => {
      const copytodos = [...todoItems];
      const remaingItems = copytodos.filter((item)=>{
        if(!doneItems.includes(item)){
            return item;
        }
      });
      setDoneItems([]);
      setTodoItems(remaingItems);
      setDisplayList(remaingItems);
    };

    const displayAll = () => {
        setDisplayList([...todoItems]);
    };

    const displayDoneTasks = () => {
        console.log("krishna", doneItems);
        setDisplayList([...doneItems]);
    };

    const displayTodoTasks = () => {
        const copyTodos = [...todoItems];
        const todos = copyTodos.filter((item)=>{
            if(!doneItems.includes(item)){
                return item;
            }
        });
        setDisplayList(todos);

    };

    return (<div>
        <div className="header-section">TodoList</div>
        <div className="display-div">
            <button className="todo-buttons" onClick={displayAll}>All</button>
            <button className="todo-buttons" onClick={displayDoneTasks}>Done</button>
            <button className="todo-buttons" onClick={displayTodoTasks}>Todo</button>
        </div>
        <div>
            {displayList.map((todo, index)=>{
                return (<div className="display-div todo-item-div" key="index">
                    {editIndex > -1 && editIndex === index ?
                    <>
                        <div>
                            <input
                                type="text"
                                className="edit-input"
                                value={editValue}
                                onChange={(e)=>setEditValue(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <button className="feature-style" onClick={saveEditedItem}>Save</button>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <span className={doneItems.includes(todo) ? "checked-style"  : "" }>{todo}</span>
                        </div>
                        <div className="inner-btns">
                            <input
                                type="checkbox"
                                className="feature-style checkbox-style"
                                checked={doneItems.includes(todo)}
                                onChange={(e)=>checkedItem(e, todo)}
                            />
                            <button className="feature-style" onClick={()=>editItem(index)}>Edit</button>
                            <button className="feature-style" onClick={()=>removeItem(index)}>Delete</button>
                        </div>
                    </>}
                </div>)
            })}
        </div>
        <div className="display-div">
            <button className="delete-buttons" onClick={deleteDoneTasks}>Delete done tasks</button>
            <button className="delete-buttons" onClick={deleteAllTasks}>Delete all tasks</button>
        </div>
    </div>)
};

export default TodoList;
