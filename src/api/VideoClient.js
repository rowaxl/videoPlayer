import axios from 'axios';

const apiKey = process.env['API_KEY'];

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResult: 25,
        key: apiKey
    }
});