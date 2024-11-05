import React from 'react';
import { useParams } from 'react-router-dom';

DetailPage.propTypes = {
    
};

function DetailPage(props) {
    const {id} = useParams()
    return (
        <div>
            Todo Detail Page id : {id}
        </div>
    );
}

export default DetailPage;