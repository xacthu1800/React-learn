import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Album.propTypes = {
    Album: PropTypes.object.isRequired
};

function Album({Album}) {
    return (
        <div className='album'>
            <div className='album__thumbnail'>
                <img style={{width: "100%", height: "100%"}} src={Album.thumbnailUrl} alt='fajsdlkf' />
            </div>
            <p className='album__name'>{Album.name}</p>
        </div>
    );
}

export default Album;