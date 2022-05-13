import axios from 'axios';
const KEY = 'AIzaSyC1HkdojPo1dB6DQ0g3snRGmVx1S7CsSZI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',

  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
