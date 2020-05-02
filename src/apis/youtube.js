import axios from 'axios';

const KEY = 'AIzaSyA7lftNxLTrjNJ4Tahrbx0X2J50gHIZTDA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

