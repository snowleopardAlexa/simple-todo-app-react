import React from 'react'

function Form({ inputText, setInputText, todos, setTodos }) {

    // write JS code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    // prevents the page from refreshing 
    const submitTodoHandler = (e) => {
        e.preventDefault();
        // spreading todos array
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        // reset state to zero input form
        setInputText("");
    };

    return (
        <div>
            <form>
                <input type="text" className="todo-input" onChange={inputTextHandler} value={inputText} />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;
