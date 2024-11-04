import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTotoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTotoClick: null,
}

function TodoList(props) {
    const { todoList, onTotoClick } = props
    const handleTodoClick = (todo, idx) =>{
        if(!onTotoClick) return;
        onTotoClick(todo, idx);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo,idx)=>(
                <li 
                    key={todo.id} 
                    className={classNames({ 
                        'todo-item': true,
                        completed: todo.status === 'completed'
                     })}
                     onClick={()=>handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;