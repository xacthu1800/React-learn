import React from 'react';
import AlbumList from './components/AlbumList';

AlbulmFeature.propTypes = {
    
};

function AlbulmFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Bocchi The Rock",
            thumbnailUrl: "https://www.animeherald.com/wp-content/uploads/2024/05/Bocchi-the-Rock-003-20240323.jpg"
        },
        {
            id: 2,
            name: "Honkai starail",
            thumbnailUrl: "https://preview.redd.it/what-do-you-think-about-bocchi-as-a-character-v0-93h9o0z5iqba1.jpg?width=640&crop=smart&auto=webp&s=e7d33f8229d4ffd3b96d22e989a98c8e4ead8fe6"
        },
        {
            id: 3,
            name: "Nigga",
            thumbnailUrl: "https://gamek.mediacdn.vn/133514250583805952/2023/1/30/base64-1674813540525218202509-1675048189624-1675048190109202923101-1675052239185-16750522392621590124892.png"
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>            
            <AlbumList AlbumList={albumList}/>
        </div>
    );
}

export default AlbulmFeature;