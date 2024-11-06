//import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import AlbulmFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFoundComponent from './component/Notfound';
import { useEffect } from 'react';
import productApi from './api/productApi';
function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log('data: ', productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      Hompage
      <p>
        <NavLink to="/todo">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/album">Alums</NavLink>
      </p>
      <Routes>
        <Route path="/todo/*" element={<TodoFeature />} />
        <Route path="/album" element={<AlbulmFeature />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
}

export default App;
