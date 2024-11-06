import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
    {
      id: 4,
      title: 'cc',
      status: 'completed',
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [todoList, setTodoList] = useState(initTodoList);
  const filterStatus = searchParams.get('status') || 'all';

  const renderTodoList = useMemo(
    () => todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status),
    [filterStatus, todoList],
  );

  function handleTodoClick(todo, idx) {
    console.log(todo, idx);

    const newTodoList = [...todoList];
    newTodoList[idx] = { ...newTodoList[idx], status: newTodoList[idx].status === 'new' ? 'completed' : 'new' };
    setTodoList(newTodoList);
  }

  function handleShowCompleted() {
    setSearchParams({ status: 'completed' });
  }

  function handleShowAll() {
    setSearchParams({ status: 'all' });
  }

  function handleShowNew() {
    setSearchParams({ status: 'new' });
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTotoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
