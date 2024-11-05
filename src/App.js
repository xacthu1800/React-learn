//import './App.css';
import { Link, Route, Routes, NavLink, Navigate  } from 'react-router-dom';
import AlbulmFeature from './features/Album';
import TodoFeature from './features/Todo';
function App() {
  const isAuthenticated = false
  return (
    <div className="App">
      Hompage
      <p>
        <Link to="/todo">Todos</Link>
      </p>
      <p>
        <Link to="/album">Alums</Link>
      </p>

      <p>
        <NavLink to="/todo">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/album">Alums</NavLink>
      </p>

      <Routes>
        <Route path="/" Component={TodoFeature}/>
        <Route path="/todo" element={isAuthenticated?<TodoFeature/>: <div>not authenticated</div>} />
        <Route path="/album" element={<AlbulmFeature />} />
      </Routes>
    </div>
  );
}

export default App;
