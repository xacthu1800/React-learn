import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/Detail_Page';
import ListPage from './pages/List_Page';
import NotFoundComponent from '../../component/Notfound';
import TodoForm from './components/Todoform';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  //const match = useMatch()
  const handleTodoFormSubmit = (values) => {
    console.log('form submit:', values);
  };

  return (
    <div>
      <h2>What to do</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
