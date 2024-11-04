import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Eat',
            status: 'new'
        },
        {
            id:2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id:3,
            title: 'Code',
            status: 'new'
        },
        {
            id:4,
            title: 'cc',
            status: 'completed'
        }
    ]

    const [todoList, setTodoList]= useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState('all')
    const renderTodoList = todoList.filter(todo=>filterStatus === 'all'|| filterStatus === todo.status)
    function handleTodoClick(todo, idx){
        console.log(todo, idx)

        const newTodoList = [...todoList]
        newTodoList[idx] = {...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList)
    }

    function handleShowCompleted(){
        setFilterStatus('completed')
    }

    function handleShowAll(){
        setFilterStatus('all')
    }

    function handleShowNew(){
        setFilterStatus('new')
    }

    return (
        <div>
            <h3>Todo List</h3>       
            <TodoList todoList={renderTodoList} onTotoClick={handleTodoClick}/>
            <div>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;