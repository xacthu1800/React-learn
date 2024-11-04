import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album'
import './style.scss'

AlbumList.propTypes = {
    AlbumList: PropTypes.array.isRequired
};

function AlbumList({AlbumList}) {
    return (
        <div>
            <ul className='album-list'>
                {AlbumList.map (album=>(
                    <li key={album.id}><Album Album={album} /></li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;