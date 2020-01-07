import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://example-d8239.firebaseio.com'
});



export default axiosApi;