import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/Detail_Page';
import ListPage from './pages/List_Page';
import NotFoundComponent from '../../component/Notfound'

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    //const match = useMatch()
    return (
        <div>
            oh shiet

            <Routes>
                <Route path='/' element={<ListPage />}/>
                <Route path='/:id' element={<DetailPage />}/>
                <Route path='*' element={<NotFoundComponent/>} />
            </Routes>

        </div>
    );
}

export default TodoFeature;